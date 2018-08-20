import BaseRepository from '../BaseRepository'
import API from '../../api'

export default class Authentication extends BaseRepository {
  constructor() {
    super(API, 'authentication')
  }
}