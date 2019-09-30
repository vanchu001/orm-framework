module.exports = {
    persistence: {
        shards: [
            {
                media: "mysql",
                host: "localhost",
                port: 3308,
                user: "root",
                password: "",
                database: "db_orm",
                table: "o_auto_fix",
            }
        ],
        hash: function (id) {
            return this.shards[0];
        }
    },
    cache: {
        shards: [
            {
                media: "redis",
                host: "127.0.0.1",
                port: 6379,
                bucket: "db_orm.o_auto_fix",
            }
        ],
        hash: function (id) {
            return this.shards[0];
        }
    }
};