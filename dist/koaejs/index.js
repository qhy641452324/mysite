/*!
 * koa-ejs - index.js
 * Copyright(c) 2017 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const debug = require('debug')('koa-ejs');
const fs = require('mz').fs;
const path = require('path');
const ejs = require('ejs');
/**
 * Temp assigned for override later
 */
const parentResolveInclude = ejs.resolveInclude;
/**
 * default render options
 * @type {Object}
 */
const defaultSettings = {
    cache: true,
    layout: 'layout',
    viewExt: 'html',
    locals: {},
    compileDebug: false,
    debug: false,
    writeResp: true,
    async: false
};
var contentPattern = '&&<>&&';
function contentFor(contentName) {
    return contentPattern + contentName + contentPattern;
}
function parseContents(locals) {
    var name, i = 1, str = locals.body, regex = new RegExp('\n?' + contentPattern + '.+?' + contentPattern + '\n?', 'g'), split = str.split(regex), matches = str.match(regex);
    locals.body = split[0];
    if (matches !== null) {
        matches.forEach(function (match) {
            name = match.split(contentPattern)[1];
            locals[name] = split[i];
            i++;
        });
    }
}
/**
 * set app.context.render
 *
 * usage:
 * ```
 * await ctx.render('user', {name: 'dead_horse'});
 * ```
 * @param {Application} app koa application instance
 * @param {Object} settings user settings
 */
function default_1(app, settings) {
    if (app.context.render) {
        return;
    }
    if (!settings || !settings.root) {
        throw new Error('settings.root required');
    }
    settings.root = path.resolve(process.cwd(), settings.root);
    /**
     * cache the generate package
     * @type {Object}
     */
    const cache = Object.create(null);
    settings = Object.assign({}, defaultSettings, settings);
    settings.viewExt = settings.viewExt
        ? '.' + settings.viewExt.replace(/^\./, '')
        : '';
    /**
     * generate html with view name and options
     * @param {String} view
     * @param {Object} options
     * @return {String} html
     */
    async function render(view, options) {
        view += settings.viewExt;
        const viewPath = path.join(settings.root, view);
        debug(`render: ${viewPath}`);
        // get from cache
        if (settings.cache && cache[viewPath]) {
            return cache[viewPath].call(options.scope, options);
        }
        const tpl = await fs.readFile(viewPath, 'utf8');
        // override `ejs` node_module `resolveInclude` function
        ejs.resolveInclude = function (name, filename, isDir) {
            if (!path.extname(name)) {
                name += settings.viewExt;
            }
            return parentResolveInclude(name, filename, isDir);
        };
        const fn = ejs.compile(tpl, {
            filename: viewPath,
            _with: settings._with,
            compileDebug: settings.debug && settings.compileDebug,
            debug: settings.debug,
            delimiter: settings.delimiter,
            cache: settings.cache,
            async: settings.async
        });
        if (settings.cache) {
            cache[viewPath] = fn;
        }
        return fn.call(options.scope, options);
    }
    app.context.render = async function (view, _context) {
        const ctx = this;
        const context = Object.assign({}, ctx.state, _context);
        context.blockFor = contentFor;
        let html = await render(view, context);
        const layout = context.layout === false ? false : (context.layout || settings.layout);
        if (layout) {
            // if using layout
            context.body = html;
            //context.defineContent = function(contentName) { return locals[contentName] || ''; }
            parseContents(context);
            context.block = function (blockname, default_txt) {
                if (context[blockname]) {
                    return context[blockname];
                }
                else if (default_txt) {
                    return default_txt;
                }
            };
            html = await render(layout, context);
        }
        const writeResp = context.writeResp === false ? false : (context.writeResp || settings.writeResp);
        if (writeResp) {
            // normal operation
            ctx.type = 'html';
            ctx.body = html;
        }
        else {
            // only return the html
            return html;
        }
    };
}
exports.default = default_1;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2tvYWVqcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsWUFBWSxDQUFDOztBQUViOztHQUVHO0FBRUgsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUzQjs7R0FFRztBQUNILE1BQU0sb0JBQW9CLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztBQUVoRDs7O0dBR0c7QUFDSCxNQUFNLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsSUFBSTtJQUNYLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsTUFBTSxFQUFFLEVBQUU7SUFDVixZQUFZLEVBQUUsS0FBSztJQUNuQixLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxJQUFJO0lBQ2YsS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBR0YsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDO0FBRTlCLFNBQVMsVUFBVSxDQUFDLFdBQW1CO0lBQ3JDLE9BQU8sY0FBYyxHQUFHLFdBQVcsR0FBRyxjQUFjLENBQUM7QUFDdkQsQ0FBQztBQUdELFNBQVMsYUFBYSxDQUFDLE1BQVc7SUFDaEMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksRUFDaEMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsS0FBSyxHQUFHLGNBQWMsR0FBRyxLQUFLLEVB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