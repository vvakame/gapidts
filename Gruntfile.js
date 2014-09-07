module.exports = function (grunt) {
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		// Java用プロジェクト構成向け設定
		opt: {
			client: {
				"jsMain": "lib/js",
				"tsMain": "lib",
				"tsMainLib": "lib/typings",
				"tsTest": "test",
				"tsTestLib": "test/libs",
				"peg": "resources",

				"outBase": "dist",
				"jsMainOut": "lib",
				"jsTestOut": "test"
			}
		},

		ts: {
			options: {
				compile: true,                 // perform compilation. [true (default) | false]
				comments: false,               // same as !removeComments. [true | false (default)]
				target: 'es5',                 // target javascript language. [es3 (default) | es5]
				module: 'commonjs',            // target javascript module style. [amd (default) | commonjs]
				noImplicitAny: true,
				sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
				sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
				mapRoot: '',                   // where to locate .map.js files. [(default) '' == generated js location.]
				declaration: false             // generate a declaration .d.ts file for every output js file. [true | false (default)]
			},
			clientMain: {
				src: ['<%= opt.client.tsMain %>/cli.ts']
			},
			clientTest: {
				src: ['<%= opt.client.tsTest %>/main-spec.ts']
			}
		},
		tslint: {
			options: {
				formatter: "prose",
				configuration: {
					// https://github.com/palantir/tslint#supported-rules
					"rules": {
						"bitwise": true,
						"classname": true,
						"curly": true,
						"debug": false,
						"dupkey": true,
						"eofline": true,
						"eqeqeq": true,
						"evil": true,
						"forin": false, // TODO 解消方法よくわからない
						// "indent": [false, 4], // WebStormのFormatterと相性が悪い
						"labelpos": true,
						"label-undefined": true,
						// "maxlen": [false, 140],
						"noarg": true,
						"noconsole": [false,
							"debug",
							"info",
							"time",
							"timeEnd",
							"trace"
						],
						"noconstruct": true,
						"nounreachable": false, // switch で怒られるので
						"noempty": false, // プロパティアクセス付き引数有りのコンストラクタまで怒られるので
						"oneline": [true,
							"check-open-brace",
							"check-catch",
							"check-else",
							"check-whitespace"
						],
						"quotemark": [true, "double"],
						"radix": false, // 10の基数指定するのめんどいので
						"semicolon": true,
						"sub": true,
						"trailing": true,
						"varname": false, // _hoge とかが許可されなくなるので…
						"whitespace": [false, // WebStormのFormatterと相性が悪い
							"check-branch",
							"check-decl",
							"check-operator",
							"check-separator",
							"check-type"
						]
					}
				}
			},
			files: {
				src: ['<%= opt.client.tsMain %>/**/*.ts', '<%= opt.client.tsTest %>/**/*.ts'],
				filter: function (filepath) {
					var mainLib = grunt.config.get("opt.client.tsMainLib") + "/";
					var testLib = grunt.config.get("opt.client.tsTestLib") + "/";
					if (filepath.indexOf(mainLib) !== -1 || filepath.indexOf(testLib) !== -1) {
						return false;
					}

					return true;
				}
			}
		},
		tsd: {
			client: {
				options: {
					// execute a command
					command: 'reinstall',

					//optional: always get from HEAD
					latest: false,

					// optional: specify config file
					config: './tsd.json'
				}
			}
		},
		clean: {
			clientScript: {
				src: [
					// client
					'<%= opt.client.jsMainOut %>/*.js',
					'<%= opt.client.jsMainOut %>/*.d.ts',
					'<%= opt.client.jsMainOut %>/*.js.map',
					// client test
					'<%= opt.client.jsTestOut %>/*.js',
					'<%= opt.client.jsTestOut %>/*.js.map',
					'<%= opt.client.jsTestOut %>/*.d.ts',
					// peg.js
					'<%= opt.client.peg %>/grammer.js'
				]
			},
			tsd: {
				src: [
					// tsd installed
					"typings/"
				]
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					require: [
						function () {
							require('espower-loader')({
								cwd: process.cwd() + '/' + grunt.config.get("opt.client.jsTestOut"),
								pattern: '**/*.js'
							});
						},
						function () {
							assert = require('power-assert');
						}
					]
				},
				src: [
					'<%= opt.client.jsTestOut %>/**/*.js'
				]
			}
		}
	};

	var testFixtureTasks = [];
	(function () {
		var fs = require("fs");
		fs.readdirSync("./test/fixture").forEach(function (fileName) {
			var matches = fileName.match(/^(.+)-(.+)-rest.json$/);
			if (matches.length !== 3) {
				return;
			}
			var name = matches[1] + "-" + matches[2];
			var taskName = "testFixture-" + name;
			testFixtureTasks.push("ts:" + taskName);
			config.ts[taskName] = {
				src: ['<%= opt.client.tsTest %>/valid/' + name + ".d.ts"]
			};
		});
	})();

	grunt.initConfig(config);

	grunt.registerTask(
		'setup',
		"setup project environment",
		['clean', 'tsd']);

	grunt.registerTask(
		'default',
		"run compile",
		['clean:clientScript', 'ts:clientMain', 'tslint']);

	grunt.registerTask(
		'test',
		"exec test suites",
		['default', 'ts:clientTest', 'mochaTest']);

	grunt.registerTask(
		'test-paranoia',
		"exec test suites",
		['test'].concat(testFixtureTasks));

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
