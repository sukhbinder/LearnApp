<template>
  <div class="item" :style="{ display: isshown ? 'block' : 'none' }">
    <div v-if="check_show() > 0">
      <div>
        <div v-show="!item.isvoiceonly">
          <h5>{{ item.question }}</h5>
          <!-- <h5>{{ item.answer }}</h5> -->
        </div>
        <div v-if="!item.isvoiceonly">
          <input type="text" v-model="useranswer" @change="check_ans" />
          <a
            href="javascript:void(0);"
            v-on:click="$emit('speak-this', this.item)"
            ><i class="fa fa-microphone"></i
          ></a>
          {{ this.useranswer }}
          <hr />
        </div>
        <div v-else>
          <input
            type="text"
            v-model="useranswer"
            @change="check_ans"
            @focus="$emit('speak-this', this.item)"
          />
          <a
            href="javascript:void(0);"
            v-on:click="$emit('speak-this', this.item)"
            ><i class="fa fa-microphone"></i
          ></a>
          {{ this.useranswer }}
          <hr />
        </div>
      </div>
    </div>
    <div v-else>
      ALL DONE
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ReviewItem",
  props: {
    item: Object,
  },
  data() {
    return {
      useranswer: "",
      isshown: true,
    };
  },
  methods: {
    check_show() {
      return moment().diff(this.item.due_date, "hours");
    },
    check_ans() {
      if (
        this.useranswer.toUpperCase().trim() ==
        this.item.answer.toUpperCase().trim()
      ) {
        this.isshown = false;
        this.$emit("correct-answer", this.item);
      } else {
        this.useranswer = "";
        this.$emit("wrong-answer", this.item);
      }
    },
  },
};
</script>


<style scoped>
.item {
  display: flex;
  padding: 10px;
}

.hide {
  visibility: hidden;
}

.show {
  visibility: visible;
}
</style>

<style scoped>
input[type="text"] {
  background-color: rgba(0, 20, 200, 0.2);
  width: 100%;
  height: 30px;
  font-family: cursive;
}
</style>