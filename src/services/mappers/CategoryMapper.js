class CategoryMapper {
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }

  toPersistence() {
    return {};
  }
}

export default new CategoryMapper();
