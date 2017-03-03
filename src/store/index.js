import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex);

//假数据
const state ={
	totalTime: 0,
	list: []
};

export default new Vuex.Store({
	state,
	mutations,
	actions
})
