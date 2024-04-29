import axios, { AxiosInstance } from "axios";
import { ICurrentFilm, IData } from "../hooks/useFilmDetails";

export class FilmsApi {
  private static instance: FilmsApi | null = null;
  private httpInstance: AxiosInstance;
  private api_key = process.env.API_KEY;
  constructor() {
    this.httpInstance = axios.create({
      baseURL: process.env.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new FilmsApi();
    return this.instance;
  }

  async fetchFilms(page: number): Promise<IData | undefined> {
    try {
      return (
        await this.httpInstance.get(
          `/popular?language=ru&page=${page}&api_key=${this.api_key}`
        )
      ).data;
    } catch (e) {
      console.log("fetch films error");
      throw new Error("Ошибка при загрузке данных");
    }
  }

  async fetchSimilarFilms(id: number): Promise<IData | undefined> {
    try {
      return (
        await this.httpInstance.get(
          `/${id}/similar?language=ru&page=1&api_key=${this.api_key}`
        )
      ).data;
    } catch (e) {
      throw new Error("Ошибка при загрузке данных");
    }
  }

  async fetchFilmDetails(id: number): Promise<ICurrentFilm | undefined> {
    try {
      return (
        await this.httpInstance.get(
          `/${id}?language=ru&api_key=${this.api_key}`
        )
      ).data;
    } catch (e) {
      console.log("fetch film details error");
      throw new Error("Ошибка при загрузке данных");
    }
  }
}
