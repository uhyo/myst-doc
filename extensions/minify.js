const minify = require('html-minifier').minify;
module.exports = (context)=>{
    context.addPostRenderHook((context, content, target)=>{
        if (!/\.html$/.test(target)){
            return content;
        }
        return minify(content, {
            collapseWhitespace: true,
        });
    });
};
