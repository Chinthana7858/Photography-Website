package chinthana.photographyweb.service;

import chinthana.photographyweb.entity.BlogSubTopic;
import chinthana.photographyweb.repository.BlogSubTopicRepository;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@AllArgsConstructor
@Service
public class BlogSubTopicService {
    @Autowired
    private BlogSubTopicRepository blogSubTopicRepository;

    @Autowired
    private Cloudinary cloudinary;

    public BlogSubTopic createBlogSubTopic(String blogId, int subTopicNo, String subTitle, String content, MultipartFile subTopicPhoto) throws IOException {
        Map uploadResult = cloudinary.uploader().upload(subTopicPhoto.getBytes(), ObjectUtils.emptyMap());
        String subTopicPhotoUrl = uploadResult.get("url").toString();
        BlogSubTopic subTopic = new BlogSubTopic();
        subTopic.setBlogId(blogId);
        subTopic.setSubTopicNo(subTopicNo);
        subTopic.setSubTitle(subTitle);
        subTopic.setContent(content);
        subTopic.setSubTopicPhoto(subTopicPhotoUrl);
        return blogSubTopicRepository.save(subTopic);
    }
}
