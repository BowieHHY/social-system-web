export const setIsAuthenticated=({commit},data)=>{
    //这个setIsAuthenticated是和mutations的一样的，只不过过了这一手
    commit("setIsAuthenticated",data);
};
export const setUser=({commit},data)=>{
    commit("setUser",data);
};
export const setProfile=({commit},data)=>{
    commit("setProfile",data);
};
//重新定义一个profile  清楚用户信息  在退出和token过期的时候可以使用
export const clearCurrentState=({commit})=>{
    commit("setProfile",null);
    commit("setUser",null);
    commit("setIsAuthenticated",false);
};
export const setLoading=({commit},data)=>{
    commit("setLoading",data);
};

export const setProfiles = ({ commit }, data) => {
    commit('setProfiles', data);
};
