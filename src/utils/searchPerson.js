export function searchPerson(personName, searchTerm) {
  return personName
    .toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase());
}
