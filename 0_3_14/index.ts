import { commonLangs } from "./config";

class HighlightService {
  loaded: string[] = [];

  // <search value, real value>
  langMap: Record<string, string> = {
    // 新发现的
    shell: "bash",
    assembly: "asm6502",
    asm: "asm6502",
    vue: "markup",
    xml: "markup",
    html: "markup",
    "c++": "cpp",
    cc: "cpp",
    cplusplus: "cpp",
    // native
    abap: "abap",
    abnf: "abnf",
    actionscript: "actionscript",
    ada: "ada",
    agda: "agda",
    al: "al",
    antlr4: "antlr4",
    apacheconf: "apacheconf",
    apex: "apex",
    apl: "apl",
    applescript: "applescript",
    aql: "aql",
    arduino: "arduino",
    arff: "arff",
    armasm: "armasm",
    arturo: "arturo",
    asciidoc: "asciidoc",
    asm6502: "asm6502",
    asmatmel: "asmatmel",
    aspnet: "aspnet",
    autohotkey: "autohotkey",
    autoit: "autoit",
    avisynth: "avisynth",
    "avro-idl": "avro-idl",
    awk: "awk",
    bash: "bash",
    basic: "basic",
    batch: "batch",
    bbcode: "bbcode",
    bbj: "bbj",
    bicep: "bicep",
    birb: "birb",
    bison: "bison",
    bnf: "bnf",
    bqn: "bqn",
    brainfuck: "brainfuck",
    brightscript: "brightscript",
    bro: "bro",
    bsl: "bsl",
    c: "c",
    cfscript: "cfscript",
    chaiscript: "chaiscript",
    cil: "cil",
    cilkc: "cilkc",
    cilkcpp: "cilkcpp",
    clike: "clike",
    clojure: "clojure",
    cmake: "cmake",
    cobol: "cobol",
    coffeescript: "coffeescript",
    concurnas: "concurnas",
    cooklang: "cooklang",
    coq: "coq",
    core: "core",
    cpp: "cpp",
    crystal: "crystal",
    csharp: "csharp",
    cshtml: "cshtml",
    csp: "csp",
    "css-extras": "css-extras",
    css: "css",
    csv: "csv",
    cue: "cue",
    cypher: "cypher",
    d: "d",
    dart: "dart",
    dataweave: "dataweave",
    dax: "dax",
    dhall: "dhall",
    diff: "diff",
    django: "django",
    "dns-zone-file": "dns-zone-file",
    docker: "docker",
    dot: "dot",
    ebnf: "ebnf",
    editorconfig: "editorconfig",
    eiffel: "eiffel",
    ejs: "ejs",
    elixir: "elixir",
    elm: "elm",
    erb: "erb",
    erlang: "erlang",
    etlua: "etlua",
    "excel-formula": "excel-formula",
    factor: "factor",
    false: "false",
    "firestore-security-rules": "firestore-security-rules",
    flow: "flow",
    fortran: "fortran",
    fsharp: "fsharp",
    ftl: "ftl",
    gap: "gap",
    gcode: "gcode",
    gdscript: "gdscript",
    gedcom: "gedcom",
    gettext: "gettext",
    gherkin: "gherkin",
    git: "git",
    glsl: "glsl",
    gml: "gml",
    gn: "gn",
    "go-module": "go-module",
    go: "go",
    gradle: "gradle",
    graphql: "graphql",
    groovy: "groovy",
    haml: "haml",
    handlebars: "handlebars",
    haskell: "haskell",
    haxe: "haxe",
    hcl: "hcl",
    hlsl: "hlsl",
    hoon: "hoon",
    hpkp: "hpkp",
    hsts: "hsts",
    http: "http",
    ichigojam: "ichigojam",
    icon: "icon",
    "icu-message-format": "icu-message-format",
    idris: "idris",
    iecst: "iecst",
    ignore: "ignore",
    inform7: "inform7",
    ini: "ini",
    io: "io",
    j: "j",
    java: "java",
    javadoc: "javadoc",
    javadoclike: "javadoclike",
    javascript: "javascript",
    javastacktrace: "javastacktrace",
    jexl: "jexl",
    jolie: "jolie",
    jq: "jq",
    "js-extras": "js-extras",
    "js-templates": "js-templates",
    jsdoc: "jsdoc",
    json: "json",
    json5: "json5",
    jsonp: "jsonp",
    jsstacktrace: "jsstacktrace",
    jsx: "jsx",
    julia: "julia",
    keepalived: "keepalived",
    keyman: "keyman",
    kotlin: "kotlin",
    kumir: "kumir",
    kusto: "kusto",
    latex: "latex",
    latte: "latte",
    less: "less",
    lilypond: "lilypond",
    "linker-script": "linker-script",
    liquid: "liquid",
    lisp: "lisp",
    livescript: "livescript",
    llvm: "llvm",
    log: "log",
    lolcode: "lolcode",
    lua: "lua",
    magma: "magma",
    makefile: "makefile",
    markdown: "markdown",
    "markup-templating": "markup-templating",
    markup: "markup",
    mata: "mata",
    matlab: "matlab",
    maxscript: "maxscript",
    mel: "mel",
    mermaid: "mermaid",
    metafont: "metafont",
    mizar: "mizar",
    mongodb: "mongodb",
    monkey: "monkey",
    moonscript: "moonscript",
    n1ql: "n1ql",
    n4js: "n4js",
    "nand2tetris-hdl": "nand2tetris-hdl",
    naniscript: "naniscript",
    nasm: "nasm",
    neon: "neon",
    nevod: "nevod",
    nginx: "nginx",
    nim: "nim",
    nix: "nix",
    nsis: "nsis",
    objectivec: "objectivec",
    ocaml: "ocaml",
    odin: "odin",
    opencl: "opencl",
    openqasm: "openqasm",
    oz: "oz",
    parigp: "parigp",
    parser: "parser",
    pascal: "pascal",
    pascaligo: "pascaligo",
    pcaxis: "pcaxis",
    peoplecode: "peoplecode",
    perl: "perl",
    "php-extras": "php-extras",
    php: "php",
    phpdoc: "phpdoc",
    "plant-uml": "plant-uml",
    plsql: "plsql",
    powerquery: "powerquery",
    powershell: "powershell",
    processing: "processing",
    prolog: "prolog",
    promql: "promql",
    properties: "properties",
    protobuf: "protobuf",
    psl: "psl",
    pug: "pug",
    puppet: "puppet",
    pure: "pure",
    purebasic: "purebasic",
    purescript: "purescript",
    python: "python",
    q: "q",
    qml: "qml",
    qore: "qore",
    qsharp: "qsharp",
    r: "r",
    racket: "racket",
    reason: "reason",
    regex: "regex",
    rego: "rego",
    renpy: "renpy",
    rescript: "rescript",
    rest: "rest",
    rip: "rip",
    roboconf: "roboconf",
    robotframework: "robotframework",
    ruby: "ruby",
    rust: "rust",
    sas: "sas",
    sass: "sass",
    scala: "scala",
    scheme: "scheme",
    scss: "scss",
    "shell-session": "shell-session",
    smali: "smali",
    smalltalk: "smalltalk",
    smarty: "smarty",
    sml: "sml",
    solidity: "solidity",
    "solution-file": "solution-file",
    soy: "soy",
    sparql: "sparql",
    "splunk-spl": "splunk-spl",
    sqf: "sqf",
    sql: "sql",
    squirrel: "squirrel",
    stan: "stan",
    stata: "stata",
    stylus: "stylus",
    supercollider: "supercollider",
    swift: "swift",
    systemd: "systemd",
    "t4-cs": "t4-cs",
    "t4-templating": "t4-templating",
    "t4-vb": "t4-vb",
    tap: "tap",
    tcl: "tcl",
    textile: "textile",
    toml: "toml",
    tremor: "tremor",
    tsx: "tsx",
    tt2: "tt2",
    turtle: "turtle",
    twig: "twig",
    typescript: "typescript",
    typoscript: "typoscript",
    unrealscript: "unrealscript",
    uorazor: "uorazor",
    uri: "uri",
    v: "v",
    vala: "vala",
    vbnet: "vbnet",
    velocity: "velocity",
    verilog: "verilog",
    vhdl: "vhdl",
    vim: "vim",
    "visual-basic": "visual-basic",
    warpscript: "warpscript",
    wasm: "wasm",
    "web-idl": "web-idl",
    wgsl: "wgsl",
    wiki: "wiki",
    wolfram: "wolfram",
    wren: "wren",
    xeora: "xeora",
    "xml-doc": "xml-doc",
    xojo: "xojo",
    xquery: "xquery",
    yaml: "yaml",
    yang: "yang",
    zig: "zig",
  };

  startLoadingFrequentlyUsedLang() {
    for (const lang of commonLangs) {
      this[`load-${lang}`];
    }
  }

  queryLang(lang: string) {
    return this.langMap[lang];
  }

  isLoaded(rawLang: string) {
    if (!(rawLang in this.langMap)) {
      return true;
    }
    return this.loaded.includes(this.langMap[rawLang]);
  }

  has(rawLang: string) {
    if (!(rawLang in this.langMap)) {
      return false;
    }
    return true;
  }

  load(rawLang: string) {
    if (this.has(rawLang)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (
        this[
          `load-${
            this.langMap[this.queryLang(rawLang)]
          }` as keyof HighlightService
        ] as () => Promise<void>
      )();
    }
    return Promise.resolve();
  }

  "load-abap" = () => {
    return import("prismjs/components/prism-abap.min.js").then(() => {
      this.loaded.push("abap");
    });
  };

  "load-abnf" = () => {
    return import("prismjs/components/prism-abnf.min.js").then(() => {
      this.loaded.push("abnf");
    });
  };

  "load-actionscript" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-actionscript.min.js").then(() => {
      this.loaded.push("actionscript");
    });
  };

  "load-ada" = () => {
    return import("prismjs/components/prism-ada.min.js").then(() => {
      this.loaded.push("ada");
    });
  };

  "load-agda" = () => {
    return import("prismjs/components/prism-agda.min.js").then(() => {
      this.loaded.push("agda");
    });
  };

  "load-al" = () => {
    return import("prismjs/components/prism-al.min.js").then(() => {
      this.loaded.push("al");
    });
  };

  "load-antlr4" = () => {
    return import("prismjs/components/prism-antlr4.min.js").then(() => {
      this.loaded.push("antlr4");
    });
  };

  "load-apacheconf" = () => {
    return import("prismjs/components/prism-apacheconf.min.js").then(() => {
      this.loaded.push("apacheconf");
    });
  };

  "load-apex" = () => {
    return import("prismjs/components/prism-apex.min.js").then(() => {
      this.loaded.push("apex");
    });
  };

  "load-apl" = () => {
    return import("prismjs/components/prism-apl.min.js").then(() => {
      this.loaded.push("apl");
    });
  };

  "load-applescript" = () => {
    return import("prismjs/components/prism-applescript.min.js").then(() => {
      this.loaded.push("applescript");
    });
  };

  "load-aql" = () => {
    return import("prismjs/components/prism-aql.min.js").then(() => {
      this.loaded.push("aql");
    });
  };

  "load-arduino" = async () => {
    await this["load-cpp"]();

    return import("prismjs/components/prism-arduino.min.js").then(() => {
      this.loaded.push("arduino");
    });
  };

  "load-arff" = () => {
    return import("prismjs/components/prism-arff.min.js").then(() => {
      this.loaded.push("arff");
    });
  };

  "load-armasm" = () => {
    return import("prismjs/components/prism-armasm.min.js").then(() => {
      this.loaded.push("armasm");
    });
  };

  "load-arturo" = () => {
    return import("prismjs/components/prism-arturo.min.js").then(() => {
      this.loaded.push("arturo");
    });
  };

  "load-asciidoc" = () => {
    return import("prismjs/components/prism-asciidoc.min.js").then(() => {
      this.loaded.push("asciidoc");
    });
  };

  "load-asm6502" = () => {
    return import("prismjs/components/prism-asm6502.min.js").then(() => {
      this.loaded.push("asm6502");
    });
  };

  "load-asmatmel" = () => {
    return import("prismjs/components/prism-asmatmel.min.js").then(() => {
      this.loaded.push("asmatmel");
    });
  };

  "load-aspnet" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-aspnet.min.js").then(() => {
      this.loaded.push("aspnet");
    });
  };

  "load-autohotkey" = () => {
    return import("prismjs/components/prism-autohotkey.min.js").then(() => {
      this.loaded.push("autohotkey");
    });
  };

  "load-autoit" = () => {
    return import("prismjs/components/prism-autoit.min.js").then(() => {
      this.loaded.push("autoit");
    });
  };

  "load-avisynth" = () => {
    return import("prismjs/components/prism-avisynth.min.js").then(() => {
      this.loaded.push("avisynth");
    });
  };

  "load-avro-idl" = () => {
    return import("prismjs/components/prism-avro-idl.min.js").then(() => {
      this.loaded.push("avro-idl");
    });
  };

  "load-awk" = () => {
    return import("prismjs/components/prism-awk.min.js").then(() => {
      this.loaded.push("awk");
    });
  };

  "load-bash" = () => {
    return import("prismjs/components/prism-bash.min.js").then(() => {
      this.loaded.push("bash");
    });
  };

  "load-basic" = () => {
    return import("prismjs/components/prism-basic.min.js").then(() => {
      this.loaded.push("basic");
    });
  };

  "load-batch" = () => {
    return import("prismjs/components/prism-batch.min.js").then(() => {
      this.loaded.push("batch");
    });
  };

  "load-bbcode" = () => {
    return import("prismjs/components/prism-bbcode.min.js").then(() => {
      this.loaded.push("bbcode");
    });
  };

  "load-bbj" = () => {
    return import("prismjs/components/prism-bbj.min.js").then(() => {
      this.loaded.push("bbj");
    });
  };

  "load-bicep" = () => {
    return import("prismjs/components/prism-bicep.min.js").then(() => {
      this.loaded.push("bicep");
    });
  };

  "load-birb" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-birb.min.js").then(() => {
      this.loaded.push("birb");
    });
  };

  "load-bison" = () => {
    return import("prismjs/components/prism-bison.min.js").then(() => {
      this.loaded.push("bison");
    });
  };

  "load-bnf" = () => {
    return import("prismjs/components/prism-bnf.min.js").then(() => {
      this.loaded.push("bnf");
    });
  };

  "load-bqn" = () => {
    return import("prismjs/components/prism-bqn.min.js").then(() => {
      this.loaded.push("bqn");
    });
  };

  "load-brainfuck" = () => {
    return import("prismjs/components/prism-brainfuck.min.js").then(() => {
      this.loaded.push("brainfuck");
    });
  };

  "load-brightscript" = () => {
    return import("prismjs/components/prism-brightscript.min.js").then(() => {
      this.loaded.push("brightscript");
    });
  };

  "load-bro" = () => {
    return import("prismjs/components/prism-bro.min.js").then(() => {
      this.loaded.push("bro");
    });
  };

  "load-bsl" = () => {
    return import("prismjs/components/prism-bsl.min.js").then(() => {
      this.loaded.push("bsl");
    });
  };

  "load-c" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-c.min.js").then(() => {
      this.loaded.push("c");
    });
  };

  "load-cfscript" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-cfscript.min.js").then(() => {
      this.loaded.push("cfscript");
    });
  };

  "load-chaiscript" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-chaiscript.min.js").then(() => {
      this.loaded.push("chaiscript");
    });
  };

  "load-cil" = () => {
    return import("prismjs/components/prism-cil.min.js").then(() => {
      this.loaded.push("cil");
    });
  };

  "load-cilkc" = () => {
    return import("prismjs/components/prism-cilkc.min.js").then(() => {
      this.loaded.push("cilkc");
    });
  };

  "load-cilkcpp" = () => {
    return import("prismjs/components/prism-cilkcpp.min.js").then(() => {
      this.loaded.push("cilkcpp");
    });
  };

  "load-clike" = () => {
    return import("prismjs/components/prism-clike.min.js").then(() => {
      this.loaded.push("clike");
    });
  };

  "load-clojure" = () => {
    return import("prismjs/components/prism-clojure.min.js").then(() => {
      this.loaded.push("clojure");
    });
  };

  "load-cmake" = () => {
    return import("prismjs/components/prism-cmake.min.js").then(() => {
      this.loaded.push("cmake");
    });
  };

  "load-cobol" = () => {
    return import("prismjs/components/prism-cobol.min.js").then(() => {
      this.loaded.push("cobol");
    });
  };

  "load-coffeescript" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-coffeescript.min.js").then(() => {
      this.loaded.push("coffeescript");
    });
  };

  "load-concurnas" = () => {
    return import("prismjs/components/prism-concurnas.min.js").then(() => {
      this.loaded.push("concurnas");
    });
  };

  "load-cooklang" = () => {
    return import("prismjs/components/prism-cooklang.min.js").then(() => {
      this.loaded.push("cooklang");
    });
  };

  "load-coq" = () => {
    return import("prismjs/components/prism-coq.min.js").then(() => {
      this.loaded.push("coq");
    });
  };

  "load-core" = async () => {
    await this["load-css"]();

    return import("prismjs/components/prism-core.min.js").then(() => {
      this.loaded.push("core");
    });
  };

  "load-cpp" = async () => {
    await this["load-c"]();

    return import("prismjs/components/prism-cpp.min.js").then(() => {
      this.loaded.push("cpp");
    });
  };

  "load-crystal" = async () => {
    await this["load-ruby"]();

    return import("prismjs/components/prism-crystal.min.js").then(() => {
      this.loaded.push("crystal");
    });
  };

  "load-csharp" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-csharp.min.js").then(() => {
      this.loaded.push("csharp");
    });
  };

  "load-cshtml" = async () => {
    await Promise.all([this["load-markup"](), this["load-csharp"]()]);

    return import("prismjs/components/prism-cshtml.min.js").then(() => {
      this.loaded.push("cshtml");
    });
  };

  "load-csp" = () => {
    return import("prismjs/components/prism-csp.min.js").then(() => {
      this.loaded.push("csp");
    });
  };

  "load-css-extras" = () => {
    return import("prismjs/components/prism-css-extras.min.js").then(() => {
      this.loaded.push("css-extras");
    });
  };

  "load-css" = () => {
    return import("prismjs/components/prism-css.min.js").then(() => {
      this.loaded.push("css");
    });
  };

  "load-csv" = () => {
    return import("prismjs/components/prism-csv.min.js").then(() => {
      this.loaded.push("csv");
    });
  };

  "load-cue" = () => {
    return import("prismjs/components/prism-cue.min.js").then(() => {
      this.loaded.push("cue");
    });
  };

  "load-cypher" = () => {
    return import("prismjs/components/prism-cypher.min.js").then(() => {
      this.loaded.push("cypher");
    });
  };

  "load-d" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-d.min.js").then(() => {
      this.loaded.push("d");
    });
  };

  "load-dart" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-dart.min.js").then(() => {
      this.loaded.push("dart");
    });
  };

  "load-dataweave" = () => {
    return import("prismjs/components/prism-dataweave.min.js").then(() => {
      this.loaded.push("dataweave");
    });
  };

  "load-dax" = () => {
    return import("prismjs/components/prism-dax.min.js").then(() => {
      this.loaded.push("dax");
    });
  };

  "load-dhall" = () => {
    return import("prismjs/components/prism-dhall.min.js").then(() => {
      this.loaded.push("dhall");
    });
  };

  "load-diff" = () => {
    return import("prismjs/components/prism-diff.min.js").then(() => {
      this.loaded.push("diff");
    });
  };

  "load-django" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-django.min.js").then(() => {
      this.loaded.push("django");
    });
  };

  "load-dns-zone-file" = () => {
    return import("prismjs/components/prism-dns-zone-file.min.js").then(() => {
      this.loaded.push("dns-zone-file");
    });
  };

  "load-docker" = () => {
    return import("prismjs/components/prism-docker.min.js").then(() => {
      this.loaded.push("docker");
    });
  };

  "load-dot" = () => {
    return import("prismjs/components/prism-dot.min.js").then(() => {
      this.loaded.push("dot");
    });
  };

  "load-ebnf" = () => {
    return import("prismjs/components/prism-ebnf.min.js").then(() => {
      this.loaded.push("ebnf");
    });
  };

  "load-editorconfig" = () => {
    return import("prismjs/components/prism-editorconfig.min.js").then(() => {
      this.loaded.push("editorconfig");
    });
  };

  "load-eiffel" = () => {
    return import("prismjs/components/prism-eiffel.min.js").then(() => {
      this.loaded.push("eiffel");
    });
  };

  "load-ejs" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-ejs.min.js").then(() => {
      this.loaded.push("ejs");
    });
  };

  "load-elixir" = () => {
    return import("prismjs/components/prism-elixir.min.js").then(() => {
      this.loaded.push("elixir");
    });
  };

  "load-elm" = () => {
    return import("prismjs/components/prism-elm.min.js").then(() => {
      this.loaded.push("elm");
    });
  };

  "load-erb" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-erb.min.js").then(() => {
      this.loaded.push("erb");
    });
  };

  "load-erlang" = () => {
    return import("prismjs/components/prism-erlang.min.js").then(() => {
      this.loaded.push("erlang");
    });
  };

  "load-etlua" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-etlua.min.js").then(() => {
      this.loaded.push("etlua");
    });
  };

  "load-excel-formula" = () => {
    return import("prismjs/components/prism-excel-formula.min.js").then(() => {
      this.loaded.push("excel-formula");
    });
  };

  "load-factor" = () => {
    return import("prismjs/components/prism-factor.min.js").then(() => {
      this.loaded.push("factor");
    });
  };

  "load-false" = () => {
    return import("prismjs/components/prism-false.min.js").then(() => {
      this.loaded.push("false");
    });
  };

  "load-firestore-security-rules" = async () => {
    await this["load-clike"]();

    return import(
      "prismjs/components/prism-firestore-security-rules.min.js"
    ).then(() => {
      this.loaded.push("firestore-security-rules");
    });
  };

  "load-flow" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-flow.min.js").then(() => {
      this.loaded.push("flow");
    });
  };

  "load-fortran" = () => {
    return import("prismjs/components/prism-fortran.min.js").then(() => {
      this.loaded.push("fortran");
    });
  };

  "load-fsharp" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-fsharp.min.js").then(() => {
      this.loaded.push("fsharp");
    });
  };

  "load-ftl" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-ftl.min.js").then(() => {
      this.loaded.push("ftl");
    });
  };

  "load-gap" = () => {
    return import("prismjs/components/prism-gap.min.js").then(() => {
      this.loaded.push("gap");
    });
  };

  "load-gcode" = () => {
    return import("prismjs/components/prism-gcode.min.js").then(() => {
      this.loaded.push("gcode");
    });
  };

  "load-gdscript" = () => {
    return import("prismjs/components/prism-gdscript.min.js").then(() => {
      this.loaded.push("gdscript");
    });
  };

  "load-gedcom" = () => {
    return import("prismjs/components/prism-gedcom.min.js").then(() => {
      this.loaded.push("gedcom");
    });
  };

  "load-gettext" = () => {
    return import("prismjs/components/prism-gettext.min.js").then(() => {
      this.loaded.push("gettext");
    });
  };

  "load-gherkin" = () => {
    return import("prismjs/components/prism-gherkin.min.js").then(() => {
      this.loaded.push("gherkin");
    });
  };

  "load-git" = () => {
    return import("prismjs/components/prism-git.min.js").then(() => {
      this.loaded.push("git");
    });
  };

  "load-glsl" = async () => {
    await this["load-c"]();

    return import("prismjs/components/prism-glsl.min.js").then(() => {
      this.loaded.push("glsl");
    });
  };

  "load-gml" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-gml.min.js").then(() => {
      this.loaded.push("gml");
    });
  };

  "load-gn" = () => {
    return import("prismjs/components/prism-gn.min.js").then(() => {
      this.loaded.push("gn");
    });
  };

  "load-go-module" = () => {
    return import("prismjs/components/prism-go-module.min.js").then(() => {
      this.loaded.push("go-module");
    });
  };

  "load-go" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-go.min.js").then(() => {
      this.loaded.push("go");
    });
  };

  "load-gradle" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-gradle.min.js").then(() => {
      this.loaded.push("gradle");
    });
  };

  "load-graphql" = () => {
    return import("prismjs/components/prism-graphql.min.js").then(() => {
      this.loaded.push("graphql");
    });
  };

  "load-groovy" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-groovy.min.js").then(() => {
      this.loaded.push("groovy");
    });
  };

  "load-haml" = () => {
    return import("prismjs/components/prism-haml.min.js").then(() => {
      this.loaded.push("haml");
    });
  };

  "load-handlebars" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-handlebars.min.js").then(() => {
      this.loaded.push("handlebars");
    });
  };

  "load-haskell" = () => {
    return import("prismjs/components/prism-haskell.min.js").then(() => {
      this.loaded.push("haskell");
    });
  };

  "load-haxe" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-haxe.min.js").then(() => {
      this.loaded.push("haxe");
    });
  };

  "load-hcl" = () => {
    return import("prismjs/components/prism-hcl.min.js").then(() => {
      this.loaded.push("hcl");
    });
  };

  "load-hlsl" = async () => {
    await this["load-c"]();

    return import("prismjs/components/prism-hlsl.min.js").then(() => {
      this.loaded.push("hlsl");
    });
  };

  "load-hoon" = () => {
    return import("prismjs/components/prism-hoon.min.js").then(() => {
      this.loaded.push("hoon");
    });
  };

  "load-hpkp" = () => {
    return import("prismjs/components/prism-hpkp.min.js").then(() => {
      this.loaded.push("hpkp");
    });
  };

  "load-hsts" = () => {
    return import("prismjs/components/prism-hsts.min.js").then(() => {
      this.loaded.push("hsts");
    });
  };

  "load-http" = () => {
    return import("prismjs/components/prism-http.min.js").then(() => {
      this.loaded.push("http");
    });
  };

  "load-ichigojam" = () => {
    return import("prismjs/components/prism-ichigojam.min.js").then(() => {
      this.loaded.push("ichigojam");
    });
  };

  "load-icon" = () => {
    return import("prismjs/components/prism-icon.min.js").then(() => {
      this.loaded.push("icon");
    });
  };

  "load-icu-message-format" = () => {
    return import("prismjs/components/prism-icu-message-format.min.js").then(
      () => {
        this.loaded.push("icu-message-format");
      }
    );
  };

  "load-idris" = async () => {
    await this["load-haskell"]();

    return import("prismjs/components/prism-idris.min.js").then(() => {
      this.loaded.push("idris");
    });
  };

  "load-iecst" = () => {
    return import("prismjs/components/prism-iecst.min.js").then(() => {
      this.loaded.push("iecst");
    });
  };

  "load-ignore" = () => {
    return import("prismjs/components/prism-ignore.min.js").then(() => {
      this.loaded.push("ignore");
    });
  };

  "load-inform7" = () => {
    return import("prismjs/components/prism-inform7.min.js").then(() => {
      this.loaded.push("inform7");
    });
  };

  "load-ini" = () => {
    return import("prismjs/components/prism-ini.min.js").then(() => {
      this.loaded.push("ini");
    });
  };

  "load-io" = () => {
    return import("prismjs/components/prism-io.min.js").then(() => {
      this.loaded.push("io");
    });
  };

  "load-j" = () => {
    return import("prismjs/components/prism-j.min.js").then(() => {
      this.loaded.push("j");
    });
  };

  "load-java" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-java.min.js").then(() => {
      this.loaded.push("java");
    });
  };

  "load-javadoc" = async () => {
    await this["load-javadoclike"]();

    return import("prismjs/components/prism-javadoc.min.js").then(() => {
      this.loaded.push("javadoc");
    });
  };

  "load-javadoclike" = () => {
    return import("prismjs/components/prism-javadoclike.min.js").then(() => {
      this.loaded.push("javadoclike");
    });
  };

  "load-javascript" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-javascript.min.js").then(() => {
      this.loaded.push("javascript");
    });
  };

  "load-javastacktrace" = () => {
    return import("prismjs/components/prism-javastacktrace.min.js").then(() => {
      this.loaded.push("javastacktrace");
    });
  };

  "load-jexl" = () => {
    return import("prismjs/components/prism-jexl.min.js").then(() => {
      this.loaded.push("jexl");
    });
  };

  "load-jolie" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-jolie.min.js").then(() => {
      this.loaded.push("jolie");
    });
  };

  "load-jq" = () => {
    return import("prismjs/components/prism-jq.min.js").then(() => {
      this.loaded.push("jq");
    });
  };

  "load-js-extras" = () => {
    return import("prismjs/components/prism-js-extras.min.js").then(() => {
      this.loaded.push("js-extras");
    });
  };

  "load-js-templates" = () => {
    return import("prismjs/components/prism-js-templates.min.js").then(() => {
      this.loaded.push("js-templates");
    });
  };

  "load-jsdoc" = async () => {
    await this["load-javadoclike"]();

    return import("prismjs/components/prism-jsdoc.min.js").then(() => {
      this.loaded.push("jsdoc");
    });
  };

  "load-json" = () => {
    return import("prismjs/components/prism-json.min.js").then(() => {
      this.loaded.push("json");
    });
  };

  "load-json5" = async () => {
    await this["load-json"]();

    return import("prismjs/components/prism-json5.min.js").then(() => {
      this.loaded.push("json5");
    });
  };

  "load-jsonp" = async () => {
    await this["load-json"]();

    return import("prismjs/components/prism-jsonp.min.js").then(() => {
      this.loaded.push("jsonp");
    });
  };

  "load-jsstacktrace" = () => {
    return import("prismjs/components/prism-jsstacktrace.min.js").then(() => {
      this.loaded.push("jsstacktrace");
    });
  };

  "load-jsx" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-jsx.min.js").then(() => {
      this.loaded.push("jsx");
    });
  };

  "load-julia" = () => {
    return import("prismjs/components/prism-julia.min.js").then(() => {
      this.loaded.push("julia");
    });
  };

  "load-keepalived" = () => {
    return import("prismjs/components/prism-keepalived.min.js").then(() => {
      this.loaded.push("keepalived");
    });
  };

  "load-keyman" = () => {
    return import("prismjs/components/prism-keyman.min.js").then(() => {
      this.loaded.push("keyman");
    });
  };

  "load-kotlin" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-kotlin.min.js").then(() => {
      this.loaded.push("kotlin");
    });
  };

  "load-kumir" = () => {
    return import("prismjs/components/prism-kumir.min.js").then(() => {
      this.loaded.push("kumir");
    });
  };

  "load-kusto" = () => {
    return import("prismjs/components/prism-kusto.min.js").then(() => {
      this.loaded.push("kusto");
    });
  };

  "load-latex" = () => {
    return import("prismjs/components/prism-latex.min.js").then(() => {
      this.loaded.push("latex");
    });
  };

  "load-latte" = async () => {
    await Promise.all([
      this["load-markup-templating"](),
      this["load-markup"](),
    ]);

    return import("prismjs/components/prism-latte.min.js").then(() => {
      this.loaded.push("latte");
    });
  };

  "load-less" = async () => {
    await this["load-css"]();

    return import("prismjs/components/prism-less.min.js").then(() => {
      this.loaded.push("less");
    });
  };

  "load-lilypond" = () => {
    return import("prismjs/components/prism-lilypond.min.js").then(() => {
      this.loaded.push("lilypond");
    });
  };

  "load-linker-script" = () => {
    return import("prismjs/components/prism-linker-script.min.js").then(() => {
      this.loaded.push("linker-script");
    });
  };

  "load-liquid" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-liquid.min.js").then(() => {
      this.loaded.push("liquid");
    });
  };

  "load-lisp" = () => {
    return import("prismjs/components/prism-lisp.min.js").then(() => {
      this.loaded.push("lisp");
    });
  };

  "load-livescript" = () => {
    return import("prismjs/components/prism-livescript.min.js").then(() => {
      this.loaded.push("livescript");
    });
  };

  "load-llvm" = () => {
    return import("prismjs/components/prism-llvm.min.js").then(() => {
      this.loaded.push("llvm");
    });
  };

  "load-log" = async () => {
    await this["load-javastacktrace"]();

    return import("prismjs/components/prism-log.min.js").then(() => {
      this.loaded.push("log");
    });
  };

  "load-lolcode" = () => {
    return import("prismjs/components/prism-lolcode.min.js").then(() => {
      this.loaded.push("lolcode");
    });
  };

  "load-lua" = () => {
    return import("prismjs/components/prism-lua.min.js").then(() => {
      this.loaded.push("lua");
    });
  };

  "load-magma" = () => {
    return import("prismjs/components/prism-magma.min.js").then(() => {
      this.loaded.push("magma");
    });
  };

  "load-makefile" = () => {
    return import("prismjs/components/prism-makefile.min.js").then(() => {
      this.loaded.push("makefile");
    });
  };

  "load-markdown" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-markdown.min.js").then(() => {
      this.loaded.push("markdown");
    });
  };

  "load-markup-templating" = () => {
    return import("prismjs/components/prism-markup-templating.min.js").then(
      () => {
        this.loaded.push("markup-templating");
      }
    );
  };

  "load-markup" = () => {
    return import("prismjs/components/prism-markup.min.js").then(() => {
      this.loaded.push("markup");
    });
  };

  "load-mata" = () => {
    return import("prismjs/components/prism-mata.min.js").then(() => {
      this.loaded.push("mata");
    });
  };

  "load-matlab" = () => {
    return import("prismjs/components/prism-matlab.min.js").then(() => {
      this.loaded.push("matlab");
    });
  };

  "load-maxscript" = () => {
    return import("prismjs/components/prism-maxscript.min.js").then(() => {
      this.loaded.push("maxscript");
    });
  };

  "load-mel" = () => {
    return import("prismjs/components/prism-mel.min.js").then(() => {
      this.loaded.push("mel");
    });
  };

  "load-mermaid" = () => {
    return import("prismjs/components/prism-mermaid.min.js").then(() => {
      this.loaded.push("mermaid");
    });
  };

  "load-metafont" = () => {
    return import("prismjs/components/prism-metafont.min.js").then(() => {
      this.loaded.push("metafont");
    });
  };

  "load-mizar" = () => {
    return import("prismjs/components/prism-mizar.min.js").then(() => {
      this.loaded.push("mizar");
    });
  };

  "load-mongodb" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-mongodb.min.js").then(() => {
      this.loaded.push("mongodb");
    });
  };

  "load-monkey" = () => {
    return import("prismjs/components/prism-monkey.min.js").then(() => {
      this.loaded.push("monkey");
    });
  };

  "load-moonscript" = () => {
    return import("prismjs/components/prism-moonscript.min.js").then(() => {
      this.loaded.push("moonscript");
    });
  };

  "load-n1ql" = () => {
    return import("prismjs/components/prism-n1ql.min.js").then(() => {
      this.loaded.push("n1ql");
    });
  };

  "load-n4js" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-n4js.min.js").then(() => {
      this.loaded.push("n4js");
    });
  };

  "load-nand2tetris-hdl" = () => {
    return import("prismjs/components/prism-nand2tetris-hdl.min.js").then(
      () => {
        this.loaded.push("nand2tetris-hdl");
      }
    );
  };

  "load-naniscript" = () => {
    return import("prismjs/components/prism-naniscript.min.js").then(() => {
      this.loaded.push("naniscript");
    });
  };

  "load-nasm" = () => {
    return import("prismjs/components/prism-nasm.min.js").then(() => {
      this.loaded.push("nasm");
    });
  };

  "load-neon" = () => {
    return import("prismjs/components/prism-neon.min.js").then(() => {
      this.loaded.push("neon");
    });
  };

  "load-nevod" = () => {
    return import("prismjs/components/prism-nevod.min.js").then(() => {
      this.loaded.push("nevod");
    });
  };

  "load-nginx" = () => {
    return import("prismjs/components/prism-nginx.min.js").then(() => {
      this.loaded.push("nginx");
    });
  };

  "load-nim" = () => {
    return import("prismjs/components/prism-nim.min.js").then(() => {
      this.loaded.push("nim");
    });
  };

  "load-nix" = () => {
    return import("prismjs/components/prism-nix.min.js").then(() => {
      this.loaded.push("nix");
    });
  };

  "load-nsis" = () => {
    return import("prismjs/components/prism-nsis.min.js").then(() => {
      this.loaded.push("nsis");
    });
  };

  "load-objectivec" = async () => {
    await this["load-c"]();

    return import("prismjs/components/prism-objectivec.min.js").then(() => {
      this.loaded.push("objectivec");
    });
  };

  "load-ocaml" = () => {
    return import("prismjs/components/prism-ocaml.min.js").then(() => {
      this.loaded.push("ocaml");
    });
  };

  "load-odin" = () => {
    return import("prismjs/components/prism-odin.min.js").then(() => {
      this.loaded.push("odin");
    });
  };

  "load-opencl" = async () => {
    await this["load-c"]();

    return import("prismjs/components/prism-opencl.min.js").then(() => {
      this.loaded.push("opencl");
    });
  };

  "load-openqasm" = () => {
    return import("prismjs/components/prism-openqasm.min.js").then(() => {
      this.loaded.push("openqasm");
    });
  };

  "load-oz" = () => {
    return import("prismjs/components/prism-oz.min.js").then(() => {
      this.loaded.push("oz");
    });
  };

  "load-parigp" = () => {
    return import("prismjs/components/prism-parigp.min.js").then(() => {
      this.loaded.push("parigp");
    });
  };

  "load-parser" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-parser.min.js").then(() => {
      this.loaded.push("parser");
    });
  };

  "load-pascal" = () => {
    return import("prismjs/components/prism-pascal.min.js").then(() => {
      this.loaded.push("pascal");
    });
  };

  "load-pascaligo" = () => {
    return import("prismjs/components/prism-pascaligo.min.js").then(() => {
      this.loaded.push("pascaligo");
    });
  };

  "load-pcaxis" = () => {
    return import("prismjs/components/prism-pcaxis.min.js").then(() => {
      this.loaded.push("pcaxis");
    });
  };

  "load-peoplecode" = () => {
    return import("prismjs/components/prism-peoplecode.min.js").then(() => {
      this.loaded.push("peoplecode");
    });
  };

  "load-perl" = () => {
    return import("prismjs/components/prism-perl.min.js").then(() => {
      this.loaded.push("perl");
    });
  };

  "load-php-extras" = () => {
    return import("prismjs/components/prism-php-extras.min.js").then(() => {
      this.loaded.push("php-extras");
    });
  };

  "load-php" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-php.min.js").then(() => {
      this.loaded.push("php");
    });
  };

  "load-phpdoc" = async () => {
    await this["load-javadoclike"]();

    return import("prismjs/components/prism-phpdoc.min.js").then(() => {
      this.loaded.push("phpdoc");
    });
  };

  "load-plant-uml" = () => {
    return import("prismjs/components/prism-plant-uml.min.js").then(() => {
      this.loaded.push("plant-uml");
    });
  };

  "load-plsql" = async () => {
    await this["load-sql"]();

    return import("prismjs/components/prism-plsql.min.js").then(() => {
      this.loaded.push("plsql");
    });
  };

  "load-powerquery" = () => {
    return import("prismjs/components/prism-powerquery.min.js").then(() => {
      this.loaded.push("powerquery");
    });
  };

  "load-powershell" = () => {
    return import("prismjs/components/prism-powershell.min.js").then(() => {
      this.loaded.push("powershell");
    });
  };

  "load-processing" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-processing.min.js").then(() => {
      this.loaded.push("processing");
    });
  };

  "load-prolog" = () => {
    return import("prismjs/components/prism-prolog.min.js").then(() => {
      this.loaded.push("prolog");
    });
  };

  "load-promql" = () => {
    return import("prismjs/components/prism-promql.min.js").then(() => {
      this.loaded.push("promql");
    });
  };

  "load-properties" = () => {
    return import("prismjs/components/prism-properties.min.js").then(() => {
      this.loaded.push("properties");
    });
  };

  "load-protobuf" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-protobuf.min.js").then(() => {
      this.loaded.push("protobuf");
    });
  };

  "load-psl" = () => {
    return import("prismjs/components/prism-psl.min.js").then(() => {
      this.loaded.push("psl");
    });
  };

  "load-pug" = () => {
    return import("prismjs/components/prism-pug.min.js").then(() => {
      this.loaded.push("pug");
    });
  };

  "load-puppet" = () => {
    return import("prismjs/components/prism-puppet.min.js").then(() => {
      this.loaded.push("puppet");
    });
  };

  "load-pure" = () => {
    return import("prismjs/components/prism-pure.min.js").then(() => {
      this.loaded.push("pure");
    });
  };

  "load-purebasic" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-purebasic.min.js").then(() => {
      this.loaded.push("purebasic");
    });
  };

  "load-purescript" = async () => {
    await this["load-haskell"]();

    return import("prismjs/components/prism-purescript.min.js").then(() => {
      this.loaded.push("purescript");
    });
  };

  "load-python" = () => {
    return import("prismjs/components/prism-python.min.js").then(() => {
      this.loaded.push("python");
    });
  };

  "load-q" = () => {
    return import("prismjs/components/prism-q.min.js").then(() => {
      this.loaded.push("q");
    });
  };

  "load-qml" = () => {
    return import("prismjs/components/prism-qml.min.js").then(() => {
      this.loaded.push("qml");
    });
  };

  "load-qore" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-qore.min.js").then(() => {
      this.loaded.push("qore");
    });
  };

  "load-qsharp" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-qsharp.min.js").then(() => {
      this.loaded.push("qsharp");
    });
  };

  "load-r" = () => {
    return import("prismjs/components/prism-r.min.js").then(() => {
      this.loaded.push("r");
    });
  };

  "load-racket" = async () => {
    await this["load-scheme"]();

    return import("prismjs/components/prism-racket.min.js").then(() => {
      this.loaded.push("racket");
    });
  };

  "load-reason" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-reason.min.js").then(() => {
      this.loaded.push("reason");
    });
  };

  "load-regex" = () => {
    return import("prismjs/components/prism-regex.min.js").then(() => {
      this.loaded.push("regex");
    });
  };

  "load-rego" = () => {
    return import("prismjs/components/prism-rego.min.js").then(() => {
      this.loaded.push("rego");
    });
  };

  "load-renpy" = () => {
    return import("prismjs/components/prism-renpy.min.js").then(() => {
      this.loaded.push("renpy");
    });
  };

  "load-rescript" = () => {
    return import("prismjs/components/prism-rescript.min.js").then(() => {
      this.loaded.push("rescript");
    });
  };

  "load-rest" = () => {
    return import("prismjs/components/prism-rest.min.js").then(() => {
      this.loaded.push("rest");
    });
  };

  "load-rip" = () => {
    return import("prismjs/components/prism-rip.min.js").then(() => {
      this.loaded.push("rip");
    });
  };

  "load-roboconf" = () => {
    return import("prismjs/components/prism-roboconf.min.js").then(() => {
      this.loaded.push("roboconf");
    });
  };

  "load-robotframework" = () => {
    return import("prismjs/components/prism-robotframework.min.js").then(() => {
      this.loaded.push("robotframework");
    });
  };

  "load-ruby" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-ruby.min.js").then(() => {
      this.loaded.push("ruby");
    });
  };

  "load-rust" = () => {
    return import("prismjs/components/prism-rust.min.js").then(() => {
      this.loaded.push("rust");
    });
  };

  "load-sas" = () => {
    return import("prismjs/components/prism-sas.min.js").then(() => {
      this.loaded.push("sas");
    });
  };

  "load-sass" = async () => {
    await this["load-css"]();

    return import("prismjs/components/prism-sass.min.js").then(() => {
      this.loaded.push("sass");
    });
  };

  "load-scala" = async () => {
    await this["load-java"]();

    return import("prismjs/components/prism-scala.min.js").then(() => {
      this.loaded.push("scala");
    });
  };

  "load-scheme" = () => {
    return import("prismjs/components/prism-scheme.min.js").then(() => {
      this.loaded.push("scheme");
    });
  };

  "load-scss" = async () => {
    await this["load-css"]();

    return import("prismjs/components/prism-scss.min.js").then(() => {
      this.loaded.push("scss");
    });
  };

  "load-shell-session" = () => {
    return import("prismjs/components/prism-shell-session.min.js").then(() => {
      this.loaded.push("shell-session");
    });
  };

  "load-smali" = () => {
    return import("prismjs/components/prism-smali.min.js").then(() => {
      this.loaded.push("smali");
    });
  };

  "load-smalltalk" = () => {
    return import("prismjs/components/prism-smalltalk.min.js").then(() => {
      this.loaded.push("smalltalk");
    });
  };

  "load-smarty" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-smarty.min.js").then(() => {
      this.loaded.push("smarty");
    });
  };

  "load-sml" = () => {
    return import("prismjs/components/prism-sml.min.js").then(() => {
      this.loaded.push("sml");
    });
  };

  "load-solidity" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-solidity.min.js").then(() => {
      this.loaded.push("solidity");
    });
  };

  "load-solution-file" = () => {
    return import("prismjs/components/prism-solution-file.min.js").then(() => {
      this.loaded.push("solution-file");
    });
  };

  "load-soy" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-soy.min.js").then(() => {
      this.loaded.push("soy");
    });
  };

  "load-sparql" = async () => {
    await this["load-turtle"]();

    return import("prismjs/components/prism-sparql.min.js").then(() => {
      this.loaded.push("sparql");
    });
  };

  "load-splunk-spl" = () => {
    return import("prismjs/components/prism-splunk-spl.min.js").then(() => {
      this.loaded.push("splunk-spl");
    });
  };

  "load-sqf" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-sqf.min.js").then(() => {
      this.loaded.push("sqf");
    });
  };

  "load-sql" = () => {
    return import("prismjs/components/prism-sql.min.js").then(() => {
      this.loaded.push("sql");
    });
  };

  "load-squirrel" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-squirrel.min.js").then(() => {
      this.loaded.push("squirrel");
    });
  };

  "load-stan" = () => {
    return import("prismjs/components/prism-stan.min.js").then(() => {
      this.loaded.push("stan");
    });
  };

  "load-stata" = () => {
    return import("prismjs/components/prism-stata.min.js").then(() => {
      this.loaded.push("stata");
    });
  };

  "load-stylus" = () => {
    return import("prismjs/components/prism-stylus.min.js").then(() => {
      this.loaded.push("stylus");
    });
  };

  "load-supercollider" = () => {
    return import("prismjs/components/prism-supercollider.min.js").then(() => {
      this.loaded.push("supercollider");
    });
  };

  "load-swift" = () => {
    return import("prismjs/components/prism-swift.min.js").then(() => {
      this.loaded.push("swift");
    });
  };

  "load-systemd" = () => {
    return import("prismjs/components/prism-systemd.min.js").then(() => {
      this.loaded.push("systemd");
    });
  };

  "load-t4-cs" = async () => {
    await this["load-t4-templating"]();

    return import("prismjs/components/prism-t4-cs.min.js").then(() => {
      this.loaded.push("t4-cs");
    });
  };

  "load-t4-templating" = () => {
    return import("prismjs/components/prism-t4-templating.min.js").then(() => {
      this.loaded.push("t4-templating");
    });
  };

  "load-t4-vb" = async () => {
    await this["load-t4-templating"]();

    return import("prismjs/components/prism-t4-vb.min.js").then(() => {
      this.loaded.push("t4-vb");
    });
  };

  "load-tap" = () => {
    return import("prismjs/components/prism-tap.min.js").then(() => {
      this.loaded.push("tap");
    });
  };

  "load-tcl" = () => {
    return import("prismjs/components/prism-tcl.min.js").then(() => {
      this.loaded.push("tcl");
    });
  };

  "load-textile" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-textile.min.js").then(() => {
      this.loaded.push("textile");
    });
  };

  "load-toml" = () => {
    return import("prismjs/components/prism-toml.min.js").then(() => {
      this.loaded.push("toml");
    });
  };

  "load-tremor" = () => {
    return import("prismjs/components/prism-tremor.min.js").then(() => {
      this.loaded.push("tremor");
    });
  };

  "load-tsx" = async () => {
    await this["load-jsx"]();

    return import("prismjs/components/prism-tsx.min.js").then(() => {
      this.loaded.push("tsx");
    });
  };

  "load-tt2" = async () => {
    await Promise.all([this["load-clike"](), this["load-markup-templating"]()]);

    return import("prismjs/components/prism-tt2.min.js").then(() => {
      this.loaded.push("tt2");
    });
  };

  "load-turtle" = () => {
    return import("prismjs/components/prism-turtle.min.js").then(() => {
      this.loaded.push("turtle");
    });
  };

  "load-twig" = async () => {
    await this["load-markup-templating"]();

    return import("prismjs/components/prism-twig.min.js").then(() => {
      this.loaded.push("twig");
    });
  };

  "load-typescript" = async () => {
    await this["load-javascript"]();

    return import("prismjs/components/prism-typescript.min.js").then(() => {
      this.loaded.push("typescript");
    });
  };

  "load-typoscript" = () => {
    return import("prismjs/components/prism-typoscript.min.js").then(() => {
      this.loaded.push("typoscript");
    });
  };

  "load-unrealscript" = () => {
    return import("prismjs/components/prism-unrealscript.min.js").then(() => {
      this.loaded.push("unrealscript");
    });
  };

  "load-uorazor" = () => {
    return import("prismjs/components/prism-uorazor.min.js").then(() => {
      this.loaded.push("uorazor");
    });
  };

  "load-uri" = () => {
    return import("prismjs/components/prism-uri.min.js").then(() => {
      this.loaded.push("uri");
    });
  };

  "load-v" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-v.min.js").then(() => {
      this.loaded.push("v");
    });
  };

  "load-vala" = async () => {
    await this["load-clike"]();

    return import("prismjs/components/prism-vala.min.js").then(() => {
      this.loaded.push("vala");
    });
  };

  "load-vbnet" = async () => {
    await this["load-basic"]();

    return import("prismjs/components/prism-vbnet.min.js").then(() => {
      this.loaded.push("vbnet");
    });
  };

  "load-velocity" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-velocity.min.js").then(() => {
      this.loaded.push("velocity");
    });
  };

  "load-verilog" = () => {
    return import("prismjs/components/prism-verilog.min.js").then(() => {
      this.loaded.push("verilog");
    });
  };

  "load-vhdl" = () => {
    return import("prismjs/components/prism-vhdl.min.js").then(() => {
      this.loaded.push("vhdl");
    });
  };

  "load-vim" = () => {
    return import("prismjs/components/prism-vim.min.js").then(() => {
      this.loaded.push("vim");
    });
  };

  "load-visual-basic" = () => {
    return import("prismjs/components/prism-visual-basic.min.js").then(() => {
      this.loaded.push("visual-basic");
    });
  };

  "load-warpscript" = () => {
    return import("prismjs/components/prism-warpscript.min.js").then(() => {
      this.loaded.push("warpscript");
    });
  };

  "load-wasm" = () => {
    return import("prismjs/components/prism-wasm.min.js").then(() => {
      this.loaded.push("wasm");
    });
  };

  "load-web-idl" = () => {
    return import("prismjs/components/prism-web-idl.min.js").then(() => {
      this.loaded.push("web-idl");
    });
  };

  "load-wgsl" = () => {
    return import("prismjs/components/prism-wgsl.min.js").then(() => {
      this.loaded.push("wgsl");
    });
  };

  "load-wiki" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-wiki.min.js").then(() => {
      this.loaded.push("wiki");
    });
  };

  "load-wolfram" = () => {
    return import("prismjs/components/prism-wolfram.min.js").then(() => {
      this.loaded.push("wolfram");
    });
  };

  "load-wren" = () => {
    return import("prismjs/components/prism-wren.min.js").then(() => {
      this.loaded.push("wren");
    });
  };

  "load-xeora" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-xeora.min.js").then(() => {
      this.loaded.push("xeora");
    });
  };

  "load-xml-doc" = () => {
    return import("prismjs/components/prism-xml-doc.min.js").then(() => {
      this.loaded.push("xml-doc");
    });
  };

  "load-xojo" = () => {
    return import("prismjs/components/prism-xojo.min.js").then(() => {
      this.loaded.push("xojo");
    });
  };

  "load-xquery" = async () => {
    await this["load-markup"]();

    return import("prismjs/components/prism-xquery.min.js").then(() => {
      this.loaded.push("xquery");
    });
  };

  "load-yaml" = () => {
    return import("prismjs/components/prism-yaml.min.js").then(() => {
      this.loaded.push("yaml");
    });
  };

  "load-yang" = () => {
    return import("prismjs/components/prism-yang.min.js").then(() => {
      this.loaded.push("yang");
    });
  };

  "load-zig" = () => {
    return import("prismjs/components/prism-zig.min.js").then(() => {
      this.loaded.push("zig");
    });
  };
}

export const highlightService = new HighlightService();
