module.exports = {
    devServer: {
        // 他コンテナからアクセスできるよう、
        host: 'vuejs', // docker-compose.ymlのservice名（プライベートIP相当）または0.0.0.0でbind
        port: '8080', // docker-compose.ymlでexposeするポート番号を指定
        
        /** 上だけで問題なく動くようなので、以下は現状不要か？HotReloadのためにvagrantでは必要だった。
         * 問題なく動く　→　別コンテナからの curl vuejs:8080 に応答できる。
        watchOptions: {
            poll: true
        }, 
        disableHostCheck: true, 
         */
    }
}