<template>
    <div>
        <el-form ref="form" size="small" inline :model="form" label-width="120px">
            <el-form-item label="系统模块">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="操作人员">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.region">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="操作时间">
                <el-date-picker v-model="form.region" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">重置</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary">删除</el-button>
            <el-button type="primary">清空</el-button>
            <el-button type="primary">导出</el-button>
        </div>
        <div class="list">
            <el-table :data="list" style="width: 100%" border fit highlight-current-row>
                <el-table-column prop="title" label="日志编号" width="180"></el-table-column>
                <el-table-column prop="title1" label="系统模块" width="180"></el-table-column>
                <el-table-column prop="title2" label="操作类型"></el-table-column>
                <el-table-column prop="title2" label="请求方式"></el-table-column>
                <el-table-column prop="title2" label="操作人员"></el-table-column>
                <el-table-column prop="title2" label="主机"></el-table-column>
                <el-table-column prop="title2" label="操作状态"></el-table-column>
                <el-table-column prop="title2" label="操作日期"></el-table-column>
                <el-table-column align="center" prop="created_at" label="操作" width="200">
                    <template slot-scope="scope">
                        <span>详细</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination style="text-align: right;" :current-page="paginationObj.page" :page-sizes="[10, 20, 50, 100]"
                :page-size="paginationObj.pageSize" :total="paginationObj.total"  layout="total, sizes, prev, pager, next, jumper"
                @size-change="pageSizeChangeHandle" @current-change="pageCurrentChangeHandle" />
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
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
                { title: 'title', title1: '454545454', title2: 'dfdfdf', title3: 'dfdfdf', title4: 'dfdfdf', title5: 'fdfdf', title6: 'fdfdf' },
            ],
            paginationObj: {
                page: 1,
                pageSize: 10,
                total: 200
            }
        }
    },
    methods: {
        async query(){
            
        },
        onSubmit() {
            this.$message('submit!')
        },
        onCancel() {
            this.$message({
                message: 'cancel!',
                type: 'warning'
            })
        },
        openDetail(item) {
            console.log(item)
        },
        // 分页, 每页条数
        pageSizeChangeHandle(val) {
            this.page = 1
            this.pageSize = val
            this.query()
        },
        // 分页, 当前页
        pageCurrentChangeHandle(val) {
            this.page = val
            this.query()
        },
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

    .list-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .item {
        background-color: white;
        border-radius: 20px;
        width: 100%;

        .item-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 15px;
        }

        .item-con {
            display: flex;
            justify-content: space-between;

            .item-con-left {

                font-size: 20px;

                .item-con-left-o,
                .item-con-left-t {
                    // margin-right: 25px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;

                    div {
                        min-width: 250px;
                        margin-right: 25px;
                    }
                }

                // font-weight: 600;
            }

            .item-con-right {
                display: flex;
                flex-direction: row;
                align-items: center;

                div {
                    margin: 0 5px;
                }
            }
        }
    }
}
</style>