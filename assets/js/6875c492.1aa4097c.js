(self.webpackChunknx_plus_docusaurus_workspace=self.webpackChunknx_plus_docusaurus_workspace||[]).push([[610],{8854:(e,a,t)=>{"use strict";t.d(a,{Z:()=>d});var r=t(7689),l=t(1626),s=t(9848),n=t(1742),m=t(9233),c=t(6784),i=t(9022);const o="blogPostTitle_AVF7",g="blogPostDate_3KPR";var u=t(3879);const d=function(e){var a,t,d=(a=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,h=e.frontMatter,E=e.metadata,v=e.truncated,b=e.isBlogPostPage,_=void 0!==b&&b,N=E.date,f=E.formattedDate,k=E.permalink,Z=E.tags,w=E.readingTime,T=h.author,P=h.title,M=h.image,y=h.keywords,L=h.author_url||h.authorURL,x=h.author_title||h.authorTitle,I=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(i.Z,{keywords:y,image:M}),r.createElement("article",{className:_?void 0:"margin-bottom--xl"},(t=_?"h1":"h2",r.createElement("header",null,r.createElement(t,{className:(0,l.Z)("margin-bottom--sm",o)},_?P:r.createElement(m.Z,{to:k},P)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:N,className:g},f,w&&r.createElement(r.Fragment,null," \xb7 ",d(w)))),r.createElement("div",{className:"avatar margin-vert--md"},I&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:L},r.createElement("img",{src:I,alt:T})),r.createElement("div",{className:"avatar__intro"},T&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(m.Z,{href:L},T)),r.createElement("small",{className:"avatar__subtitle"},x)))))),r.createElement("div",{className:"markdown"},r.createElement(s.Zo,{components:c.Z},p)),(Z.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var a=e.label,t=e.permalink;return r.createElement(m.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(m.Z,{to:E.permalink,"aria-label":"Read more about "+P},r.createElement("strong",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},1884:(e,a,t)=>{"use strict";t.d(a,{Z:()=>u});var r=t(7689),l=t(1626),s=t(9233);const n="sidebar_1UcC",m="sidebarItemTitle_2E0M",c="sidebarItemList_1_Yt",i="sidebarItem_2fVW",o="sidebarItemLink_MiY7",g="sidebarItemLinkActive_1REc";function u(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("div",{className:(0,l.Z)(n,"thin-scrollbar")},r.createElement("h3",{className:m},a.title),r.createElement("ul",{className:c},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:i},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))}))))}},9747:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>g});var r=t(7689),l=t(9655),s=t(8854),n=t(9233),m=t(1884),c=t(1742),i=t(3879);function o(e){var a,t=e.tagName,l=e.count,s=(a=(0,i.c2)().selectMessage,function(e){return a(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(c.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:s(l),tagName:t}},'{nPosts} tagged with "{tagName}"')}const g=function(e){var a=e.metadata,t=e.items,g=e.sidebar,u=a.allTagsPath,d=a.name,p=a.count;return r.createElement(l.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(m.Z,{sidebar:g})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(o,{count:p,tagName:d})),r.createElement(n.Z,{href:u},r.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.createElement(s.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.createElement(a,null))})))))))}}}]);