<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3> View More Recent Courses </h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
     </div>
   </div>
   <div class="updates">
     <div class="container">
       <h2>Never miss a course. Register for your free account today!</h2>
       <router-link class="router-button" to="#">
         Register for free coureses <Arrow class="arrow arrow-light" />
       </router-link>
     </div>
   </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Learn",
        blogPost: "BzEducators is an NGO that guides Belizean youth into the Information Technology sector. Belizean IT employeers tell us what skill are needed and we teach those skills. Advanced learners mentor begginer learners. Course completion leads to certification and job placement. Register today to never miss a course.",
        welcomeScreen: true,
        photo: "bzedu",
      },
      sampleBlogPost: [
        {
          title: "Mentor",
          blogHTML: "As participants learn new skills and technologies they are encoraged to mentor new particpants, thus reenforcing their own knowledge while guiding more Belizean youths into the IT field.",
          blogCoverPhoto: "bzedu5",
        },
        {
          title: "Earn!",
          blogHTML: "Course completions will lead to job placements and decent work opportunities",
          blogCoverPhoto: "bzedu7",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }


}
</style>