import BaseRepository from '../BaseRepository'
import API from '../../api'

export default class Posts extends BaseRepository {
  constructor() {
    super(API, 'posts')
  }
}