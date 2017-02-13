/*! markdown-it-replace-link 1.0.0 https://github.com//markdown-it/markdown-it-replace-link @license MIT */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.markdownitReplaceLink = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function replaceAttr(token, attrName, replace, env) {
    token.attrs.forEach(function (attr) {
        if (attr[0] === attrName) {
            attr[1] = replace(attr[1], env, token);
        }
    });
}

module.exports = function (md) {
    md.core.ruler.after(
        'inline',
        'replace-link',
        function (state) {
            var replace = md.options.replaceLink;
            if (typeof replace === 'function') {
                state.tokens.forEach(function (blockToken) {
                    if (blockToken.type === 'inline' && blockToken.children) {
                        blockToken.children.forEach(function (token) {
                            var type = token.type;
                            if (type === 'link_open') {
                                replaceAttr(token, 'href', replace, state.env);
                            } else if (type === 'image') {
                                replaceAttr(token, 'src', replace, state.env);
                            }
                        }); 
                    }
                }); 
            }
            return false;
        }
    );
};
},{}]},{},[1])(1)
});