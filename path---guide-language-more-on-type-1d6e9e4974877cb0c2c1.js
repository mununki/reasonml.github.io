webpackJsonp([30],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-more-on-type.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{html:'<h3 id="type-argument"><a href="#type-argument" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type Argument!</h3>\n<p>Types can accept parameters, akin to generics in other languages. It\'s as if a type is a function that takes in arguments and returns a new type! The parameters <strong>need</strong> to start with <code>\'</code>.</p>\n<p>The use-case of a parameterized type is to kill duplications. Before:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* this is a tuple of 3 items, explained next */</span>\n<span class="hljs-keyword">type</span> intCoordinates = (int, int, int);\n<span class="hljs-keyword">type</span> floatCoordinates = (float, float, float);\n\n<span class="hljs-keyword">let</span> buddy: intCoordinates = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>After:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> coordinates \'a = (\'a, \'a, \'a);\n\n<span class="hljs-comment">/* apply the coordinates "type function" and return the type (int, int, int) */</span>\n<span class="hljs-keyword">type</span> intCoordinatesAlias = coordinates int;\n<span class="hljs-keyword">let</span> buddy: intCoordinatesAlias = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);\n\n<span class="hljs-comment">/* or, more commonly, write it inline */</span>\n<span class="hljs-keyword">let</span> buddy: coordinates float = (<span class="hljs-number">10.5</span>, <span class="hljs-number">20.5</span>, <span class="hljs-number">20.5</span>);</code></pre>\n      </div>\n<p>In practice, types are inferred for you. So the more concise version of the above example would be nothing but:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> buddy = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>The type system infers that it\'s a <code>(int, int, int)</code>. Nothing else needed to be written down.</p>\n<p>Type arguments appear everywhere.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* inferred as `list string` */</span>\n<span class="hljs-keyword">let</span> greetings = [<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>];</code></pre>\n      </div>\n<p>If types didn\'t accept parameters (aka, if we didn\'t have "type functions"), the standard library will need to define the types <code>listOfString</code>, <code>listOfInt</code>, <code>listOfTuplesOfInt</code>, etc.</p>\n<p>Types can receive more arguments, and be composable.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> result \'a \'b =\n| <span class="hljs-type">Ok</span> \'a\n| <span class="hljs-type">Error</span> \'b;\n\n<span class="hljs-keyword">type</span> myPayload = {data: string};\n\n<span class="hljs-keyword">type</span> myPayloadResults \'errorType = list (result myPayload \'errorType);\n\n<span class="hljs-keyword">let</span> payloadResults: myPayloadResults string = [\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"hi"</span>},\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"bye"</span>},\n  <span class="hljs-type">Error</span> <span class="hljs-string">"Something wrong happened!"</span>\n];</code></pre>\n      </div>\n<h3 id="mutually-recursive-types"><a href="#mutually-recursive-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutually Recursive Types</h3>\n<p>Just like functions, types can be mutually recursive through <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> student = {taughtBy: teacher}\nand teacher = {students: list student};</code></pre>\n      </div>\n<p><strong>Note</strong> that there\'s no semicolon ending the first line and no <code>type</code> on the second line.</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>A type system allowing type argument is basically allowing type-level functions. <code>list int</code> is really the <code>list</code> type function taking in the <code>int</code> type, and returning the final, concrete type you\'d use in some places. You might have noticed that in other languages, this is more or less called "generics". For example, <code>ArrayList&#x3C;Integer></code> in Java.</p>\n<p><a href="https://en.wikipedia.org/wiki/Rule_of_least_power">The principle of least power</a> applies when you\'re trying to "Get Things Done". If the problem domain allows, definitely pick the least abstract (aka, the most concrete) solution available, so that the solution is reached faster and has fewer unstable indirections you\'d have to traverse. For example, prefer types over free-form data, prefer data-driven configuration over turing-complete function calls, prefer function calls over macros, prefer macros over project forks, etc. When you constraint your domain and power, things become easier to analyze. That is, <em>if</em> the domain is constrained enough to allow it.</p>\n<p>When a type system is an all-encompassing aspect of your program, we need to make sure we leave enough power order not to overly constrain your expressiveness; without "type functions", you\'d end up with quite a bit of boilerplate, e.g. hard-coded <code>listOfInt</code>, <code>listOfString</code>, <code>listOfArrayOfFloat</code>, their respective helper functions, etc. However, please also make sure you don\'t overly abuse the power given to you through a rather powerful type system. Sometimes, it\'s fine to write a <em>little</em> bit of boilerplate to reduce the need for otherwise extra powerful types. If anything, tasteful tradeoffs might show your pragmatism and judgement more than fancy types!</p>',frontmatter:{title:"More on Type"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/more-on-type.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-more-on-type-1d6e9e4974877cb0c2c1.js.map