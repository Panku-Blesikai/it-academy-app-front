export class Comment {
  author: string;
  input: string;
  date: string;

  constructor(author: string, input: string, date: string) {
    this.author = author;
    this.input = input;
    this.date = date;
  }
}
