const utils = {
  query () {
    const query = location.search.substring('1').split('&')
    var params = {}
    for (var i in query) {
      var key = query[i].split('=')[0],
        value = query[i].split('=')[1]
      params[key] = value
    }
    return params
  },

  gh_token () {
    return localStorage.getItem('gh_access_token')
  },

  pages (header) {
    if (header.length === 0) {
      throw new Error("input must not be of zero length")
    }
    // Split parts by comma
    var parts = header.split(',')
    var links = {};
    // Parse each part into a named link
    parts.forEach((p) => {
      var section = p.split(';')
      if (section.length != 2) {
        throw new Error("section could not be split on ';'")
      }
      var url = section[0].replace(/<(.*)>/, '$1').trim()
      var name = section[1].replace(/rel="(.*)"/, '$1').trim()
      links[name] = url
    })

    return links
  }
}

export default utils
