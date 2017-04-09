  const SLASH = '/';

  function appendSlashToUrlIfIsPossible(url) {
    var resultingUrl = url;
    var slashAppendingPossible = slashAppendingIsPossible(url);

    if (slashAppendingPossible) {
      resultingUrl += SLASH;
    }

    return resultingUrl;
  }

  function slashAppendingIsPossible(url) {
    // Slash is possible to add to the end of url in following cases:
    //  - There is no slash standing as last symbol of URL.
    //  - There is no file extension (or there is no dot inside part called file name).
    //  - There are no parameters (even empty ones — single ? at the end of URL).
    //  - There is no link to a fragment (even empty one — single # mark at the end of URL).
    var slashAppendingPossible = false;

    var parsedUrl = parseUrl(url);

    // Checking for slash absence.
    var path = parsedUrl.path;
    var lastCharacterInPath = path.substr(-1);
    var noSlashInPathEnd = lastCharacterInPath !== SLASH;

    // Check for extension absence.
    const FILE_EXTENSION_REGEXP = /\.[^.]*$/;
    var noFileExtension = !FILE_EXTENSION_REGEXP.test(parsedUrl.file);

    // Check for parameters absence.
    var noParameters = parsedUrl.query.length === 0;
    // Check for link to fragment absence.
    var noLinkToFragment = parsedUrl.hash.length === 0;

    // All checks above cannot guarantee that there is no '?' or '#' symbol at the end of URL.
    // It is required to be checked manually.
    var NO_SLASH_HASH_OR_QUESTION_MARK_AT_STRING_END_REGEXP = /[^\/#?]$/;
    var noStopCharactersAtTheEndOfRelativePath = NO_SLASH_HASH_OR_QUESTION_MARK_AT_STRING_END_REGEXP.test(parsedUrl.relative);

    slashAppendingPossible = noSlashInPathEnd && noFileExtension && noParameters && noLinkToFragment &&
      noStopCharactersAtTheEndOfRelativePath;

    return slashAppendingPossible;
  }

  // parseUrl function is based on following one:
  // http://james.padolsey.com/javascript/parsing-urls-with-the-dom/.
  function parseUrl(url) {
    var a = document.createElement('a');
    a.href = url;

    const DEFAULT_STRING = '';

    var getParametersAndValues = function (a) {
      var parametersAndValues = {};

      const QUESTION_MARK_IN_STRING_START_REGEXP = /^\?/;
      const PARAMETERS_DELIMITER = '&';
      const PARAMETER_VALUE_DELIMITER = '=';
      var parametersAndValuesStrings = a.search.replace(QUESTION_MARK_IN_STRING_START_REGEXP, DEFAULT_STRING).split(
        PARAMETERS_DELIMITER);
      var parametersAmount = parametersAndValuesStrings.length;

      for (let index = 0; index < parametersAmount; index++) {
        if (!parametersAndValuesStrings[index]) {
          continue;
        }

        let parameterAndValue = parametersAndValuesStrings[index].split(PARAMETER_VALUE_DELIMITER);
        let parameter = parameterAndValue[0];
        let value = parameterAndValue[1];

        parametersAndValues[parameter] = value;
      }

      return parametersAndValues;
    };

    const PROTOCOL_DELIMITER = ':';
    const SYMBOLS_AFTER_LAST_SLASH_AT_STRING_END_REGEXP = /\/([^\/?#]+)$/i;
    // Stub for the case when regexp match method returns null.
    const REGEXP_MATCH_STUB = [null, DEFAULT_STRING];
    const URL_FRAGMENT_MARK = '#';
    const NOT_SLASH_AT_STRING_START_REGEXP = /^([^\/])/;
    // Replace methods uses '$1' to place first capturing group.
    // In NOT_SLASH_AT_STRING_START_REGEXP regular expression that is the first
    // symbol in case something else, but not '/' has taken first position.
    const ORIGINAL_STRING_PREPENDED_BY_SLASH = '/$1';
    const URL_RELATIVE_PART_REGEXP = /tps?:\/\/[^\/]+(.+)/;
    const SLASH_AT_STRING_START_REGEXP = /^\//;
    const PATH_SEGMENTS_DELIMITER = '/';

    return {
      source: url,
      protocol: a.protocol.replace(PROTOCOL_DELIMITER, DEFAULT_STRING),
      host: a.hostname,
      port: a.port,
      query: a.search,
      parameters: getParametersAndValues(a),
      file: (a.pathname.match(SYMBOLS_AFTER_LAST_SLASH_AT_STRING_END_REGEXP) || REGEXP_MATCH_STUB)[1],
      hash: a.hash.replace(URL_FRAGMENT_MARK, DEFAULT_STRING),
      path: a.pathname.replace(NOT_SLASH_AT_STRING_START_REGEXP, ORIGINAL_STRING_PREPENDED_BY_SLASH),
      relative: (a.href.match(URL_RELATIVE_PART_REGEXP) || REGEXP_MATCH_STUB)[1],
      segments: a.pathname.replace(SLASH_AT_STRING_START_REGEXP, DEFAULT_STRING).split(PATH_SEGMENTS_DELIMITER)
    };
  }