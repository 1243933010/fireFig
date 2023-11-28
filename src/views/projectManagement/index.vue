<template>
    <div>
        <el-form ref="form" size="small" inline :model="form" label-width="120px">
            <el-form-item label="项目名称">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="项目类型">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="部门名称">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="招标方式">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="审核状态">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <!-- <el-date-picker v-model="form.region" type="date" placeholder="Pick a date" style="width: 100%;" /> -->
                    <el-date-picker v-model="form.region" type="daterange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-col :span="11">
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-form-item>
        </el-form>
        <div class="list">
            <div class="list-box">
                <div class="title"><span>项目列表</span></div>
                <div class="add"><el-button type="primary">新增</el-button></div>
            </div>
            <div class="item">
                <div v-for="(item, index) in list" :key="index">
                    <div class="item-top">
                        <div class="title">{{ item.title }}</div>
                        <div>公开招标</div>
                        <div>内审完成</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: ''
            },
            list: [
                {title:'title',title1:'454545454',title2:'dfdfdf',title3:'dfdfdf',title4:'dfdfdf',title5:'fdfdf',title1:'fdfdf'}
            ]
        }
    },
    methods: {
        onSubmit() {
            this.$message('submit!')
        },
        onCancel() {
            this.$message({
                message: 'cancel!',
                type: 'warning'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    width: 100%;
    height: 100%;
    background-color: #EBEFFE;
    padding: 0 30px;
    box-sizing: border-box;
    .list-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item{
            background-color: white;
            border-radius: 20px;
            width: 100%;
        }
    }
}
</style>