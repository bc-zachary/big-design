_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{HOTy:function(e,n,t){"use strict";var r=t("x3oR");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=(0,o.useRef)(),s=(0,o.useState)(!1),d=r(s,2),u=d[0],f=d[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return(0,o.useEffect)((function(){if(!i&&!u){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[p,u]};var o=t("ERkP"),a=t("ZeW2"),i="undefined"!==typeof IntersectionObserver;var c=new Map},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),o=t("pONU");n.__esModule=!0,n.default=void 0;var a=o(t("ERkP")),i=t("L9lV"),c=t("7xIC"),l=t("HOTy"),s={};function d(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var u=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",u=a.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),f=u.href,p=u.as,b=e.children,h=e.replace,j=e.shallow,g=e.scroll,y=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var m=a.Children.only(b),v=m&&"object"===typeof m&&m.ref,O=(0,l.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],C=x[1],E=a.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,a.useEffect)((function(){var e=C&&n&&(0,i.isLocalURL)(f),r="undefined"!==typeof y?y:t&&t.locale,o=s[f+"%"+p+(r?"%"+r:"")];e&&!o&&d(t,f,p,{locale:r})}),[p,f,C,y,n,t]);var P={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,f,p,h,j,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(t,f,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof y?y:t&&t.locale,S=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);P.href=S||(0,i.addBasePath)((0,i.addLocale)(p,L,t&&t.defaultLocale))}return a.default.cloneElement(m,P)};n.default=u},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("jg1C"),o=t("Fhg5"),a=t("jvFD"),i=t.n(a);t("ERkP");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var l=function(e){var n=e.as,t=e.children,a=e.href;return Object(r.jsx)(i.a,{href:a,as:c(n),passHref:!0,children:"string"===typeof t?Object(r.jsx)(o.a,{children:t}):t})}},TWdv:function(e,n,t){"use strict";t.r(n);var r=t("jg1C"),o=t("lebv"),a=t("Jb5e"),i=(t("ERkP"),t("lIm4")),c=t("GsAr"),l=t("LHL8"),s=t("R5dR"),d=t("nFRM");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=[{name:"defaultExpanded",types:"string[]",description:"An array of expanded node ids. Can also be used to reset expanded nodes."},{name:"defaultSelected",types:"string[]",description:"An array of selected node ids. Can also be used to reset selected nodes."},{name:"disabledNodes",types:"string[]",description:"An array of disabled node ids. Nodes will not be abled to be selectedable but can still expand/collapse."},{name:"iconless",types:"boolean",description:"Hides/shows all icons on the tree."},{name:"id",types:"string",description:"Defines a HTML id attribute to the parent wrapper."},{name:"nodes",types:Object(r.jsx)(s.a,{href:"#tree-node-prop-table",children:"TreeNode[]"}),description:Object(r.jsxs)(r.Fragment,{children:["Nodes to render in the tree. See ",Object(r.jsx)(s.a,{href:"#tree-node-prop-table",children:"below"})," for usage."]}),required:!0},{name:"onExpandedChange",types:"(expandedNodes: string[]) => void",description:"Function that will get called when a tree node is expanded/collapsed. Passes the ids of expanded nodes as an argument."},{name:"onNodeClick",types:"(event: React.MouseEvent<HTMLLIElement>, nodeId: string) => void",description:"Function that will get called when a tree node is clicked."},{name:"onSelectionChange",types:"(selectedValues: T[]) => void",description:"Function that will get called when a tree node is selected/deselecteds. Passes the values of selected nodes as an argument."},{name:"selectable",types:["multi","radio"],description:"Determines the type of selectable tree to render."}],b=function(e){return Object(r.jsx)(d.a,f({title:"StatefulTree",propList:p},e))},h=[{name:"children",types:"TreeNode[]",description:"Children for the current node."},{name:"icon",types:Object(r.jsx)(s.a,{href:"/Icons/IconsPage",as:"/icons",children:"Icon"}),description:"Custom icon, in place of the folder icon."},{name:"id",types:"string",description:"TreeNode identifier, must be unique.",required:!0},{name:"label",types:"string",description:"Label for the tree node.",required:!0},{name:"value",types:"T",description:Object(r.jsxs)(r.Fragment,{children:["Value of the selected node. A checkbox or radio will not appear if ",Object(r.jsx)(i.a,{primary:!0,children:"value"})," and"," ",Object(r.jsx)(i.a,{primary:!0,children:"selectable"})," is not defined."]})}],j=function(e){return Object(r.jsx)(d.a,f({title:"StatefulTree[TreeNode]",propList:h},e))};n.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{children:"StatefulTree"}),Object(r.jsxs)(o.m,{children:["The ",Object(r.jsx)(i.a,{primary:!0,children:"StatefulTree"})," component is used to display a tree of items. Useful for defining a tree of categories or subcollections."]}),Object(r.jsx)(c.a,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      value: 0,\n      label: 'Category',\n      children: [\n        {\n          id: '5',\n          value: 5,\n          label: 'Category',\n          children: [{ id: '9', value: 9, label: 'Category' }],\n        },\n      ],\n    },\n    {\n      id: '1',\n      value: 1,\n      label: 'Category',\n      children: [{ id: '6', value: 6, label: 'Category' }],\n    },\n    { id: '2', value: 2, label: 'Category' },\n    {\n      id: '3',\n      value: 3,\n      label: 'Category',\n      children: [{ id: '7', value: 7, label: 'Category' }],\n    },\n    { id: '4', value: 4, label: 'Category', children: [{ id: '8', value: 8, label: 'Category' }] },\n  ];\n\n  return (\n    <StatefulTree\n      defaultExpanded={['0', '5', '1']}\n      defaultSelected={['9', '3', '7']}\n      disabledNodes={['1']}\n      nodes={nodes}\n      selectable=\"multi\"\n    />\n  );\n}"}),Object(r.jsx)(o.b,{children:"API"}),Object(r.jsx)(b,{}),Object(r.jsx)(j,{id:"tree-node-prop-table"}),Object(r.jsx)(o.b,{children:"Examples"}),Object(r.jsx)(o.c,{children:"Radio"}),Object(r.jsx)(c.a,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      value: 0,\n      label: 'Category',\n      children: [{ id: '3', value: 3, label: 'Subcategory' }],\n    },\n    { id: '1', value: 1, label: 'Category' },\n    { id: '2', value: 2, label: 'Category' },\n  ];\n\n  return <StatefulTree selectable=\"radio\" nodes={nodes} defaultExpanded={['0']} disabledNodes={['0', '2']} />;\n}"}),Object(r.jsx)(o.c,{children:"Custom Icons"}),Object(r.jsx)(o.m,{children:"You can replace the folder icon with a custom icon of your choice."}),Object(r.jsx)(a.a,{type:"warning",messages:[{text:"If you use the iconless prop, ALL icons will be hidden (including custom ones)."}],marginBottom:"medium"}),Object(r.jsx)(c.a,{children:"function Example() {\n  const nodes = [\n    {\n      id: '0',\n      icon: <StoreIcon color=\"primary\" />,\n      label: 'Storefront - US',\n      children: [{ id: '3', label: 'Subcategory' }],\n    },\n    { id: '1', icon: <LanguageIcon color=\"primary\" />, label: 'Storefront - CA' },\n    { id: '2', icon: <AssignmentIcon color=\"primary\" />, label: 'Storefront - EU' },\n  ];\n\n  return <StatefulTree defaultExpanded={['0']} nodes={nodes} />;\n}"})]})}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("jg1C"),o=t("lebv"),a=t("XPf/"),i=t("BtTX"),c=t("ERkP"),l=t("ZUh6"),s=t("j/s1"),d=Object(s.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=function(e){var n=e.children,t=e.title,l=Object(c.useState)(!0),s=l[0],u=l[1],f=function(){return u(!s)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)(d,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0,children:[s?Object(r.jsx)(a.a,{title:"Expand"}):Object(r.jsx)(i.a,{title:"Collapse"}),Object(r.jsx)(o.m,{children:t})]}),!s&&n]})}},g2gy:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StatefulTree/StatefulTreePage",function(){return t("TWdv")}])},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("LHL8"),o=t("jg1C"),a=(t("ERkP"),t("j/s1")),i=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)}));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var l=function(e){return Object(o.jsx)(i,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("jg1C"),o=t("yGqs"),a=t("lebv"),i=t("Fhg5"),c=t("ERkP"),l=t.n(c),s=t("lIm4"),d=t("c2K2"),u=function(e){var n=e.collapsible,t=e.id,i=e.propList,c=e.title,l=function(){return Object(r.jsxs)(o.b,{marginBottom:"xLarge",children:[Object(r.jsx)(o.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{primary:!0,children:n}),t?Object(r.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var n=e.types;return Object(r.jsx)(f,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return Object(r.jsx)(s.a,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return Object(r.jsx)(a.m,{children:n})}}],items:i}),Object(r.jsx)(a.g,{marginTop:"xSmall",children:"Props ending with * are required"})]})};return n?Object(r.jsx)(d.a,{title:"".concat(c," Props"),children:l()}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.c,{id:t,children:c}),l()]})},f=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return Object(r.jsxs)(l.a.Fragment,{children:[e.type===i.a?Object(r.jsx)(s.a,{highlight:!1,children:e}):Object(r.jsx)(s.a,{children:e}),t<n.length-1?" | ":null]},e)})):n.type===i.a?Object(r.jsx)(s.a,{highlight:!1,children:n}):Object(r.jsx)(s.a,{children:n})}}},[["g2gy",0,1,4,7,11,8,9,2,3,6,5,10,12]]]);