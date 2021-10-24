<template>
  <div class="container">
    <section>
      <div>
        <Header @subject-select="subject_selected" :subjects="subjects" />
      </div>
    </section>
    <section>
      <div id="buttons">
        <button @click="toggle_review">Hide Review</button>
        <label>Speak</label>
        <input
          type="checkbox"
          name="check"
          id="che"
          v-model="shouldspeak"
          @click="toggle_speak"
        />
      </div>
    </section>
  </div>

  <div v-show="showreview" class="container">
    <h2 v-show="isloading">
      Please wait. loading...
    </h2>
    <!-- <h1>{{ this.get_length }}</h1> -->
    <div v-show="this.get_length <= 0"> 
      <img src='./assets/done.gif'> <br />
      All Done for Now. Please check back latter! <br />
    </div>
    <Review
      @correct-answer="correct_answer"
      @wrong-answer="wrong_answer"
      @speak-this="speakthis"
      :items="questions"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Review from "./components/Review.vue";
import axios from "axios";
import moment from "moment";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

var NUMBERS = [1, 8, 20, 40, 72, 100, 180, 360, 500, 720];

export default {
  name: "App",
  components: {
    Header,
    Review,
  },
  data() {
    return {
      questions: [],
      subject_id: 6,
      subjects: [],
      showreview: true,
      shouldspeak: false,
      showsubjects: true,
      isloading: true,
    };
  },
  computed: {
    get_length() {
      return this.questions.length;
    },
  },
  methods: {
    check_show(task) {
      return moment().diff(task.due_date, "hours");
    },
    correct_answer(task) {
      if (this.shouldspeak) {
        this.speakthisin("Thats Correct");
      }
      this.increment(task);
      this.update_duedate(task);
      this.removetask(task.id);
      this.completeTask(task);
    },

    wrong_answer(task) {
      var ans = task.answer;
      ans = ans.replace(/___/g, "blank");
      if (task.isvoiceonly) {
        ans = ans.split("").join(" ");
      }
      var msg = "Thats wrong, The answer is  " + ans;
      if (this.shouldspeak) {
        this.speakthisin(msg);
      }
      confirm(msg);
      this.decrement(task);
    },
    speakthisin: function (text) {
      let utter = new SpeechSynthesisUtterance();
      utter.lang = "en-US";
      utter.text = text;
      // utter.volume = 0.5;
      // speak
      window.speechSynthesis.speak(utter);
    },
    increment(task) {
      // var task = this.questions[id];
      task.inum++;
      if (task.inum > NUMBERS.length) {
        task.inum = NUMBERS.length-1;
      }
    },
    decrement(task) {
      // var task = this.questions[id];
      task.inum--;
      if (task.inum < 0) {
        task.inum = 0;
      }
    },
    update_duedate(task) {
      // var task = this.questions[id];
      task.due_date = moment().add(NUMBERS[task.inum-1], "hours").format();
    },
    iscorrect(task, useranswer) {
      return (
        task.answer.toUpperCase().trim() === useranswer.toUpperCase().trim()
      );
    },
    completeTask(task) {
      // var task = this.questions[id];
      let url =
        "https://learninghub.pythonanywhere.com/spelling/api/" + task.id + "/";
      let inum = task.inum;
      let due_date = task.due_date;
      axios
        .patch(url, { inum: inum, due_date: due_date })
        .then((response) => {
          task.inum = response.data.inum;
        })
        .catch((error) => {
          console.log(error);
        });
      // }
    },
    speakthis: function (task) {
      var ques = task.question;
      ques = ques.replace(/___/g, "blank");
      var msg;
      if (task.isvoiceonly) {
        msg = "Spell the word " + ques;
      } else {
        msg = "The Question is " + ques;
      }
      this.speakthisin(msg);
    },
    filtertasks(){
        this.questions = this.questions.filter((e) => this.check_show(e) > 0);
    },
    removetask(id) {
      this.questions = this.questions.filter((e) => e.id !== id);
    },
    shuffleArray: function (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    toggle_speak() {
      this.shouldspeak = !this.shouldspeak;
    },
    get_tasks(id) {
      this.isloading = true;
      axios
        .get("https://learninghub.pythonanywhere.com/spelling/subject/" + id)
        .then((response) => {
          var data = response.data;
          this.shuffleArray(data);
          this.questions = data;
          this.filtertasks();
        });
      this.isloading = false;
    },
    get_subjects() {
      axios
        .get("https://learninghub.pythonanywhere.com/spelling/subjects")
        .then((response) => (this.subjects = response.data));
    },
    subject_selected(id) {
      this.subject_id = id;
      this.get_tasks(id);
    },
    toggle_review() {
      this.showreview = !this.showreview;
    },
    toggle_showsubjects() {
      this.showsubjects = !this.showsubjects;
    },
  },
  created() {
    this.get_tasks(this.subject_id);
    this.get_subjects();
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  /* display: flex; */
  padding: 10px;
  justify-items: left;
  /* border-left: 1px solid green; */
}

#buttons {
  background-color: green;
  display: flex;
  justify-items: left;
  justify-content: left;
}
</style>







