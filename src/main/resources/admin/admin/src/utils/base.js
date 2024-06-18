const base = {
    get() {
                return {
            url : "http://localhost:8080/springboott7kpr/",
            name: "springboott7kpr",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboott7kpr/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "学生宿舍管理系统"
        } 
    }
}
export default base
