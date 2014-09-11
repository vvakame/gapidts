// Type definitions for Google Fusion Tables API v1
// Project: https://developers.google.com/fusiontables
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function fusiontables(version:string):typeof googleapis.fusiontables;
}
/**
 * API for working with Fusion Tables data.
 */
declare module googleapis.fusiontables {
    var column: {
        /**
         * Deletes the column.
         * @params {string} columnId Name or identifier for the column being deleted.
         * @params {string} tableId Table from which the column is being deleted.
         */
        delete: (params: {
            columnId: string;
            tableId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a specific column by its id.
         * @params {string} columnId Name or identifier for the column that is being requested.
         * @params {string} tableId Table to which the column belongs.
         */
        get: (params: {
            columnId: string;
            tableId: string;
        }, callback: (err: any, response: IColumn) => void) => void;
        /**
         * Adds a new column to the table.
         * @params {string} tableId Table for which a new column is being added.
         */
        insert: (params: {
            tableId: string;
            resource?: IColumn;
        }, callback: (err: any, response: IColumn) => void) => void;
        /**
         * Retrieves a list of columns.
         * @params {number} maxResults Maximum number of columns to return. Optional. Default is 5.
         * @params {string} pageToken Continuation token specifying which result page to return. Optional.
         * @params {string} tableId Table whose columns are being listed.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            tableId: string;
        }, callback: (err: any, response: IColumnList) => void) => void;
        /**
         * Updates the name or type of an existing column. This method supports patch semantics.
         * @params {string} columnId Name or identifier for the column that is being updated.
         * @params {string} tableId Table for which the column is being updated.
         */
        patch: (params: {
            columnId: string;
            tableId: string;
            resource?: IColumn;
        }, callback: (err: any, response: IColumn) => void) => void;
        /**
         * Updates the name or type of an existing column.
         * @params {string} columnId Name or identifier for the column that is being updated.
         * @params {string} tableId Table for which the column is being updated.
         */
        update: (params: {
            columnId: string;
            tableId: string;
            resource?: IColumn;
        }, callback: (err: any, response: IColumn) => void) => void;
    };
    var query: {
        /**
         * Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE statement.
         * @params {boolean} hdrs Should column names be included (in the first row)?. Default is true.
         * @params {string} sql An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
         * @params {boolean} typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
         */
        sql: (params: {
            hdrs?: boolean;
            sql: string;
            typed?: boolean;
        }, callback: (err: any, response: ISqlresponse) => void) => void;
        /**
         * Executes an SQL SELECT/SHOW/DESCRIBE statement.
         * @params {boolean} hdrs Should column names be included (in the first row)?. Default is true.
         * @params {string} sql An SQL SELECT/SHOW/DESCRIBE statement.
         * @params {boolean} typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
         */
        sqlGet: (params: {
            hdrs?: boolean;
            sql: string;
            typed?: boolean;
        }, callback: (err: any, response: ISqlresponse) => void) => void;
    };
    var style: {
        /**
         * Deletes a style.
         * @params {number} styleId Identifier (within a table) for the style being deleted
         * @params {string} tableId Table from which the style is being deleted
         */
        delete: (params: {
            styleId: number;
            tableId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Gets a specific style.
         * @params {number} styleId Identifier (integer) for a specific style in a table
         * @params {string} tableId Table to which the requested style belongs
         */
        get: (params: {
            styleId: number;
            tableId: string;
        }, callback: (err: any, response: IStyleSetting) => void) => void;
        /**
         * Adds a new style for the table.
         * @params {string} tableId Table for which a new style is being added
         */
        insert: (params: {
            tableId: string;
            resource?: IStyleSetting;
        }, callback: (err: any, response: IStyleSetting) => void) => void;
        /**
         * Retrieves a list of styles.
         * @params {number} maxResults Maximum number of styles to return. Optional. Default is 5.
         * @params {string} pageToken Continuation token specifying which result page to return. Optional.
         * @params {string} tableId Table whose styles are being listed
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            tableId: string;
        }, callback: (err: any, response: IStyleSettingList) => void) => void;
        /**
         * Updates an existing style. This method supports patch semantics.
         * @params {number} styleId Identifier (within a table) for the style being updated.
         * @params {string} tableId Table whose style is being updated.
         */
        patch: (params: {
            styleId: number;
            tableId: string;
            resource?: IStyleSetting;
        }, callback: (err: any, response: IStyleSetting) => void) => void;
        /**
         * Updates an existing style.
         * @params {number} styleId Identifier (within a table) for the style being updated.
         * @params {string} tableId Table whose style is being updated.
         */
        update: (params: {
            styleId: number;
            tableId: string;
            resource?: IStyleSetting;
        }, callback: (err: any, response: IStyleSetting) => void) => void;
    };
    var table: {
        /**
         * Copies a table.
         * @params {boolean} copyPresentation Whether to also copy tabs, styles, and templates. Default is false.
         * @params {string} tableId ID of the table that is being copied.
         */
        copy: (params: {
            copyPresentation?: boolean;
            tableId: string;
        }, callback: (err: any, response: ITable) => void) => void;
        /**
         * Deletes a table.
         * @params {string} tableId ID of the table that is being deleted.
         */
        delete: (params: {
            tableId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a specific table by its id.
         * @params {string} tableId Identifier(ID) for the table being requested.
         */
        get: (params: {
            tableId: string;
        }, callback: (err: any, response: ITable) => void) => void;
        /**
         * Import more rows into a table.
         * @params {string} delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
         * @params {string} encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
         * @params {number} endLine The index of the last line from which to start importing, exclusive. Thus, the number of imported lines is endLine - startLine. If this parameter is not provided, the file will be imported until the last line of the file. If endLine is negative, then the imported content will exclude the last endLine lines. That is, if endline is negative, no line will be imported whose index is greater than N + endLine where N is the number of lines in the file, and the number of imported lines will be N + endLine - startLine.
         * @params {boolean} isStrict Whether the CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
         * @params {number} startLine The index of the first line from which to start importing, inclusive. Default is 0.
         * @params {string} tableId The table into which new rows are being imported.
         */
        importRows: (params: {
            delimiter?: string;
            encoding?: string;
            endLine?: number;
            isStrict?: boolean;
            startLine?: number;
            tableId: string;
        }, callback: (err: any, response: IImport) => void) => void;
        /**
         * Import a new table.
         * @params {string} delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
         * @params {string} encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
         * @params {string} name The name to be assigned to the new table.
         */
        importTable: (params: {
            delimiter?: string;
            encoding?: string;
            name: string;
        }, callback: (err: any, response: ITable) => void) => void;
        /**
         * Creates a new table.
         */
        insert: (params: {
            resource?: ITable;
        }, callback: (err: any, response: ITable) => void) => void;
        /**
         * Retrieves a list of tables a user owns.
         * @params {number} maxResults Maximum number of styles to return. Optional. Default is 5.
         * @params {string} pageToken Continuation token specifying which result page to return. Optional.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
        }, callback: (err: any, response: ITableList) => void) => void;
        /**
         * Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
         * @params {boolean} replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
         * @params {string} tableId ID of the table that is being updated.
         */
        patch: (params: {
            replaceViewDefinition?: boolean;
            tableId: string;
            resource?: ITable;
        }, callback: (err: any, response: ITable) => void) => void;
        /**
         * Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
         * @params {boolean} replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
         * @params {string} tableId ID of the table that is being updated.
         */
        update: (params: {
            replaceViewDefinition?: boolean;
            tableId: string;
            resource?: ITable;
        }, callback: (err: any, response: ITable) => void) => void;
    };
    var task: {
        /**
         * Deletes the task, unless already started.
         * @params {string} tableId Table from which the task is being deleted.
         * @params {string} taskId 
         */
        delete: (params: {
            tableId: string;
            taskId: string;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a specific task by its id.
         * @params {string} tableId Table to which the task belongs.
         * @params {string} taskId 
         */
        get: (params: {
            tableId: string;
            taskId: string;
        }, callback: (err: any, response: ITask) => void) => void;
        /**
         * Retrieves a list of tasks.
         * @params {number} maxResults Maximum number of columns to return. Optional. Default is 5.
         * @params {string} pageToken 
         * @params {number} startIndex 
         * @params {string} tableId Table whose tasks are being listed.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            startIndex?: number;
            tableId: string;
        }, callback: (err: any, response: ITaskList) => void) => void;
    };
    var template: {
        /**
         * Deletes a template
         * @params {string} tableId Table from which the template is being deleted
         * @params {number} templateId Identifier for the template which is being deleted
         */
        delete: (params: {
            tableId: string;
            templateId: number;
        }, callback: (err: any, response: any) => void ) => void; // void
        /**
         * Retrieves a specific template by its id
         * @params {string} tableId Table to which the template belongs
         * @params {number} templateId Identifier for the template that is being requested
         */
        get: (params: {
            tableId: string;
            templateId: number;
        }, callback: (err: any, response: ITemplate) => void) => void;
        /**
         * Creates a new template for the table.
         * @params {string} tableId Table for which a new template is being created
         */
        insert: (params: {
            tableId: string;
            resource?: ITemplate;
        }, callback: (err: any, response: ITemplate) => void) => void;
        /**
         * Retrieves a list of templates.
         * @params {number} maxResults Maximum number of templates to return. Optional. Default is 5.
         * @params {string} pageToken Continuation token specifying which results page to return. Optional.
         * @params {string} tableId Identifier for the table whose templates are being requested
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            tableId: string;
        }, callback: (err: any, response: ITemplateList) => void) => void;
        /**
         * Updates an existing template. This method supports patch semantics.
         * @params {string} tableId Table to which the updated template belongs
         * @params {number} templateId Identifier for the template that is being updated
         */
        patch: (params: {
            tableId: string;
            templateId: number;
            resource?: ITemplate;
        }, callback: (err: any, response: ITemplate) => void) => void;
        /**
         * Updates an existing template
         * @params {string} tableId Table to which the updated template belongs
         * @params {number} templateId Identifier for the template that is being updated
         */
        update: (params: {
            tableId: string;
            templateId: number;
            resource?: ITemplate;
        }, callback: (err: any, response: ITemplate) => void) => void;
    };
    /**
     * Specifies the minimum and maximum values, the color, opacity, icon and weight of a bucket within a StyleSetting.
     */
    interface IBucket {
        /**
         * Color of line or the interior of a polygon in #RRGGBB format.
         */
        color: string;
        /**
         * Icon name used for a point.
         */
        icon: string;
        /**
         * Maximum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
         */
        max: number; // double
        /**
         * Minimum value in the selected column for a row to be styled according to the bucket color, opacity, icon, or weight.
         */
        min: number; // double
        /**
         * Opacity of the color: 0.0 (transparent) to 1.0 (opaque).
         */
        opacity: number; // double
        /**
         * Width of a line (in pixels).
         */
        weight: number; // int32
    }
    /**
     * Specifies the id, name and type of a column in a table.
     */
    interface IColumn {
        /**
         * Optional identifier of the base column. If present, this column is derived from the specified base column.
         */
        baseColumn: {
            columnId: number; // int32
            tableIndex: number; // int32
        };
        /**
         * Identifier for the column.
         */
        columnId: number; // int32
        /**
         * Optional column description.
         */
        description: string;
        /**
         * Optional column predicate. Used to map table to graph data model (subject,predicate,object) See http://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#data-model
         */
        graph_predicate: string;
        /**
         * Type name: a template for an individual column.
         */
        kind: string;
        /**
         * Required name of the column.
         */
        name: string;
        /**
         * Required type of the column.
         */
        type: string;
    }
    /**
     * Represents a list of columns in a table.
     */
    interface IColumnList {
        /**
         * List of all requested columns.
         */
        items: IColumn[];
        /**
         * Type name: a list of all columns.
         */
        kind: string;
        /**
         * Token used to access the next page of this result. No token is displayed if there are no more tokens left.
         */
        nextPageToken: string;
        /**
         * Total number of columns for the table.
         */
        totalItems: number; // int32
    }
    /**
     * Represents a Geometry object.
     */
    interface IGeometry {
        /**
         * The list of geometries in this geometry collection.
         */
        geometries: any[];
        geometry: any;
        /**
         * Type: A collection of geometries.
         */
        type: string;
    }
    /**
     * Represents an import request.
     */
    interface IImport {
        /**
         * Type name: a template for an import request.
         */
        kind: string;
        /**
         * The number of rows received from the import request.
         */
        numRowsReceived: string; // int64
    }
    /**
     * Represents a line geometry.
     */
    interface ILine {
        /**
         * The coordinates that define the line.
         */
        coordinates: number /* double */ [][];
        /**
         * Type: A line geometry.
         */
        type: string;
    }
    /**
     * Represents a LineStyle within a StyleSetting
     */
    interface ILineStyle {
        /**
         * Color of the line in #RRGGBB format.
         */
        strokeColor: string;
        /**
         * Column-value, gradient or buckets styler that is used to determine the line color and opacity.
         */
        strokeColorStyler: IStyleFunction;
        /**
         * Opacity of the line : 0.0 (transparent) to 1.0 (opaque).
         */
        strokeOpacity: number; // double
        /**
         * Width of the line in pixels.
         */
        strokeWeight: number; // int32
        /**
         * Column-value or bucket styler that is used to determine the width of the line.
         */
        strokeWeightStyler: IStyleFunction;
    }
    /**
     * Represents a point object.
     */
    interface IPoint {
        /**
         * The coordinates that define the point.
         */
        coordinates: number /* double */ [];
        /**
         * Point: A point geometry.
         */
        type: string;
    }
    /**
     * Represents a PointStyle within a StyleSetting
     */
    interface IPointStyle {
        /**
         * Name of the icon. Use values defined in http://www.google.com/fusiontables/DataSource?dsrcid=308519
         */
        iconName: string;
        /**
         * Column or a bucket value from which the icon name is to be determined.
         */
        iconStyler: IStyleFunction;
    }
    /**
     * Represents a polygon object.
     */
    interface IPolygon {
        /**
         * The coordinates that define the polygon.
         */
        coordinates: number /* double */ [][][];
        /**
         * Type: A polygon geometry.
         */
        type: string;
    }
    /**
     * Represents a PolygonStyle within a StyleSetting
     */
    interface IPolygonStyle {
        /**
         * Color of the interior of the polygon in #RRGGBB format.
         */
        fillColor: string;
        /**
         * Column-value, gradient, or bucket styler that is used to determine the interior color and opacity of the polygon.
         */
        fillColorStyler: IStyleFunction;
        /**
         * Opacity of the interior of the polygon: 0.0 (transparent) to 1.0 (opaque).
         */
        fillOpacity: number; // double
        /**
         * Color of the polygon border in #RRGGBB format.
         */
        strokeColor: string;
        /**
         * Column-value, gradient or buckets styler that is used to determine the border color and opacity.
         */
        strokeColorStyler: IStyleFunction;
        /**
         * Opacity of the polygon border: 0.0 (transparent) to 1.0 (opaque).
         */
        strokeOpacity: number; // double
        /**
         * Width of the polyon border in pixels.
         */
        strokeWeight: number; // int32
        /**
         * Column-value or bucket styler that is used to determine the width of the polygon border.
         */
        strokeWeightStyler: IStyleFunction;
    }
    /**
     * Represents a response to an sql statement.
     */
    interface ISqlresponse {
        /**
         * Columns in the table.
         */
        columns: string[];
        /**
         * Type name: a template for an individual table.
         */
        kind: string;
        /**
         * The rows in the table. For each cell we print out whatever cell value (e.g., numeric, string) exists. Thus it is important that each cell contains only one value.
         */
        rows: any[][];
    }
    /**
     * Represents a StyleFunction within a StyleSetting
     */
    interface IStyleFunction {
        /**
         * Bucket function that assigns a style based on the range a column value falls into.
         */
        buckets: IBucket[];
        /**
         * Name of the column whose value is used in the style.
         */
        columnName: string;
        /**
         * Gradient function that interpolates a range of colors based on column value.
         */
        gradient: {
            colors: {
                color: string;
                opacity: number; // double
            }[];
            max: number; // double
            min: number; // double
        };
        /**
         * Stylers can be one of three kinds: "fusiontables#fromColumn" if the column value is to be used as is, i.e., the column values can have colors in #RRGGBBAA format or integer line widths or icon names; "fusiontables#gradient" if the styling of the row is to be based on applying the gradient function on the column value; or "fusiontables#buckets" if the styling is to based on the bucket into which the the column value falls.
         */
        kind: string;
    }
    /**
     * Represents a complete StyleSettings object. The primary key is a combination of the tableId and a styleId.
     */
    interface IStyleSetting {
        /**
         * Type name: an individual style setting. A StyleSetting contains the style defintions for points, lines, and polygons in a table. Since a table can have any one or all of them, a style definition can have point, line and polygon style definitions.
         */
        kind: string;
        /**
         * Style definition for points in the table.
         */
        markerOptions: IPointStyle;
        /**
         * Optional name for the style setting.
         */
        name: string;
        /**
         * Style definition for polygons in the table.
         */
        polygonOptions: IPolygonStyle;
        /**
         * Style definition for lines in the table.
         */
        polylineOptions: ILineStyle;
        /**
         * Identifier for the style setting (unique only within tables).
         */
        styleId: number; // int32
        /**
         * Identifier for the table.
         */
        tableId: string;
    }
    /**
     * Represents a list of styles for a given table.
     */
    interface IStyleSettingList {
        /**
         * All requested style settings.
         */
        items: IStyleSetting[];
        /**
         * Type name: in this case, a list of style settings.
         */
        kind: string;
        /**
         * Token used to access the next page of this result. No token is displayed if there are no more styles left.
         */
        nextPageToken: string;
        /**
         * Total number of styles for the table.
         */
        totalItems: number; // int32
    }
    /**
     * Represents a table. Specifies the name, whether it is exportable, description, attribution, and attribution link.
     */
    interface ITable {
        /**
         * Optional attribution assigned to the table.
         */
        attribution: string;
        /**
         * Optional link for attribution.
         */
        attributionLink: string;
        /**
         * Optional base table identifier if this table is a view or merged table.
         */
        baseTableIds: string[];
        /**
         * Columns in the table.
         */
        columns: IColumn[];
        /**
         * Optional description assigned to the table.
         */
        description: string;
        /**
         * Variable for whether table is exportable.
         */
        isExportable: boolean;
        /**
         * Type name: a template for an individual table.
         */
        kind: string;
        /**
         * Name assigned to a table.
         */
        name: string;
        /**
         * Optional sql that encodes the table definition for derived tables.
         */
        sql: string;
        /**
         * Encrypted unique alphanumeric identifier for the table.
         */
        tableId: string;
    }
    /**
     * Represents a list of tables.
     */
    interface ITableList {
        /**
         * List of all requested tables.
         */
        items: ITable[];
        /**
         * Type name: a list of all tables.
         */
        kind: string;
        /**
         * Token used to access the next page of this result. No token is displayed if there are no more tokens left.
         */
        nextPageToken: string;
    }
    /**
     * Specifies the id, name and type of a task in a table.
     */
    interface ITask {
        /**
         * Type name: a template for an individual task.
         */
        kind: string;
        /**
         * An indication of task progress.
         */
        progress: string;
        /**
         * False while the table is busy with some other task.
         */
        started: boolean;
        /**
         * Identifier for the task.
         */
        taskId: string; // int64
        type: string;
    }
    /**
     * Represents a list of tasks in a table.
     */
    interface ITaskList {
        /**
         * List of all requested tasks.
         */
        items: ITask[];
        /**
         * Type name: a list of all tasks.
         */
        kind: string;
        /**
         * Token used to access the next page of this result. No token is displayed if there are no more tokens left.
         */
        nextPageToken: string;
        /**
         * Total number of tasks for the table.
         */
        totalItems: number; // int32
    }
    /**
     * Represents the contents of InfoWindow templates.
     */
    interface ITemplate {
        /**
         * List of columns from which the template is to be automatically constructed. Only one of body or automaticColumns can be specified.
         */
        automaticColumnNames: string[];
        /**
         * Body of the template. It contains HTML with {column_name} to insert values from a particular column. The body is sanitized to remove certain tags, e.g., script. Only one of body or automaticColumns can be specified.
         */
        body: string;
        /**
         * Type name: a template for the info window contents. The template can either include an HTML body or a list of columns from which the template is computed automatically.
         */
        kind: string;
        /**
         * Optional name assigned to a template.
         */
        name: string;
        /**
         * Identifier for the table for which the template is defined.
         */
        tableId: string;
        /**
         * Identifier for the template, unique within the context of a particular table.
         */
        templateId: number; // int32
    }
    /**
     * Represents a list of templates for a given table.
     */
    interface ITemplateList {
        /**
         * List of all requested templates.
         */
        items: ITemplate[];
        /**
         * Type name: a list of all templates.
         */
        kind: string;
        /**
         * Token used to access the next page of this result. No token is displayed if there are no more tokens left.
         */
        nextPageToken: string;
        /**
         * Total number of templates for the table.
         */
        totalItems: number; // int32
    }
}
