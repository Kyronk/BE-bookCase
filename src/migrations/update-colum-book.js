// add thêm một cột tên là filename để lưu tên file ảnh trên cloud
// 



module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.addColumn(
            'Books',
            'filename',
            Sequelize.STRING
        );

    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn(
            'Books',
            'filename'
        );
    }
}