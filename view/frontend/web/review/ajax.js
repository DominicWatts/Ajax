define(
    [
        'jquery',
        'ko',
        'uiComponent'
    ], function(
        $,
        ko,
        Component
    ) {
    return Component.extend({
        initialize: function () {

            this._super();
           
            var url = '/review/ajax/fetch',
                param = 'product=' + $('#product-id').val(),
                reviewWording,
                reviewFound = false;

            $.ajax({
                async: false, // required
                showLoader: true,
                url: url,
                data: param,
                type: "POST",
                dataType: 'json',
                success : function (response) {
                    reviewWording = response.reviewWording;
                    reviewFound = response.reviewFound;
                }
            });
                                               
            this.response = reviewWording;
            this.reviewFound = reviewFound;
            this.observe(['response']);
     
        }
    });
});