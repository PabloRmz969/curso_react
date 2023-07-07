import { heroes } from "../data/Heroes"

export const getHeroeById = (id) => {
  return heroes.find(hero => hero.id === id)
}
