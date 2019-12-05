export class Article {
  createdAt: Date;

  constructor(public id: string, public text: string, public claps: number, public title: string, public feature_image: string, public author: object, createdAt: string, public comments: Object) {
    this.createdAt = createdAt ? new Date(createdAt) : new Date()

  }
}
