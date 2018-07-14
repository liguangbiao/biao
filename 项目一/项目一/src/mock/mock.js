import Mock from 'mockjs'
Mock.mock('../api/data', (req, res) => {
    return {
        data: [
            {
                name:'xuhaibin',
                age:'24',
                pic:'static/img/logo.png'
            },
            {
                name:'laohei',
                age:'23',
                pic:'static/img/logo.png'
            },
        ],
        status:200
    }
})