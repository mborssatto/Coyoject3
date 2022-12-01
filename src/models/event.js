class Event {
  constructor(name, artists, date, venue, city) {
    this.name = name
    this.artists = artists
    this.date = date
    this.city = city
    this.favoritedBy = []
  }

  get detail() {
    return `
Event: ${this.name}
Artists:\n${this.artists
      .map(element => {
        return `- ${element}`
      })
      .join('\n')}
${this.date}
City: ${this.city}
Favorited by: ${this.favoritedBy}
        `
  }
}

module.exports = Event
