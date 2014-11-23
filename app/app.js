$(function() {
    $.getJSON("/ui.json", function(ui) {

        function get(id) {
            obj = _.cloneDeep(ui[id]);
            extend = obj._extend;
            if (extend === undefined) {
                extend = [];
            }
            _.each(extend, function(superId) {
                obj = _.extend(obj, get(superId));
            });
            delete obj._extend
            return obj;
        };

        function create(id) {
            obj = _.extend({ ID: id }, get(id));
            type = obj._type
            delete obj._type
            console.log("create", type, JSON.stringify(obj));
            isc[type].create(obj);
        };

        create("sc_LoginDialog");
    });
});
