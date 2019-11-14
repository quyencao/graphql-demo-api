const db = require('./db');

const resolver = {
    Query: {
        getUser: (_, args) => {
            return db.getTable("usersTable").getRecordById(args.id).then(data => {
                return data.Item
            }).catch(err => null);
        },
        getUsers: (_, args) => {
            return  db.getTable("usersTable").getRecords({}).then(data => {
                return data.Items
            }).catch(err => null);
        }
    },
    Mutation: {
        createUser: (_, args) => {
            return db.getTable("usersTable")
            .insertRecord(args.input)
            .then(data => data)
            .catch(err => {
                throw err;
            })
        },
        deleteUser: (_, args) => {
            return db.getTable("usersTable")
                .deleteRecordById(args.id)
                .then(data => true)
                .catch(err => false);
        },
        updateUser: (_, args) => {
            return db.getTable("usersTable")
                .updateRecordById(args.id, args.input)
                .then(data => data.Attributes)
                .catch(err => null);
        }
    }
}

module.exports = resolver;