package chinthana.photographyweb.repository;

import chinthana.photographyweb.entity.BlogSubTopic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogSubTopicRepository extends MongoRepository<BlogSubTopic,String> {
}
