<template>
  <div class="well">
    <transition-group name="list" tag="div">
      <transition-group
        v-for="(item, index) in (mobile ? mobileLeave : leave)"
        :key="index + Math.random()"
        tag="ul"
        class="pcLeave"
        name="list"
        :class="mobile ? 'mobileLeave' : ''" >
        <li
          v-for="(elem, ind) in leaveList"
          v-if="ind % (mobile ? 2 : 4) === index"
          :key="ind + Math.random()">
          <p>{{ elem.leaveTime }}</p>
          <h5 v-if="elem.leaveTitle">{{ elem.leaveTitle }}</h5>
          <view-marked :marked="elem.leaveContent | emoji"></view-marked>
          <p class="user">{{ elem.leaveUser }}</p>
        </li>
      </transition-group>
    </transition-group>

  </div>
</template>
<script>
import viewMarked from '@/components/common/viewMarked.vue'

export default {
  name: 'well',
  data () {
    return {
      leave: [
        [],
        [],
        [],
        []
      ],
      mobileLeave: [
        [],
        []
      ]
    }
  },
  components: {
    viewMarked
  },
  methods: {
  },
  computed: {
    leaveList () {
      return this.$store.state.leave.leaveList
    },
    mobile () {
      return this.$store.state.isMobile
    }
  },
  watch: {
    updateList: {
      handler: function () {
        // this.leave = this.list
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.well {
  width: 100%;
  display: flex;
  margin-top: 20px;
  div {
    width: 100%;
    display: flex;
  }
  .pcLeave {
    width: 25%;
    padding: 10px;
    li {
      width: 100%;
      min-height: 270px;
      background: #fff;
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
      padding-bottom: 30px;
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      transition: .35s;
      .user {
        position: absolute;
        bottom: 5px;
        right: 5px;
      }
      h5 {
        font-size: 15px;
        text-align: center;
        margin: 5px 0px;
      }
      &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
      }
    }
    &.mobileLeave {
      width: 50%;
    }
  }
}
</style>
