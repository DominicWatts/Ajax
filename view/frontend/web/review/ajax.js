define([
  'jquery',
  'ko',
  'uiComponent'
], function (
  $,
  ko,
  Component
) {
    return Component.extend({

        reviewFound: ko.observable(0),
        response: ko.observable(''),

        initialize: function () {
            this._super();

            var url = '/review/ajax/fetch',
              param = 'product=' + $('#product-id').val(),
              self = this;

            $.ajax({
                showLoader: true,
                url: url,
                data: param,
                type: "POST",
                dataType: 'json'
            }).done(function (response) {
                self.response = response.reviewWording;
                self.reviewFound = response.reviewFound;
            }).fail(function (error) {
                // in case of fail
            }).always(function (error) {
                // example stop loader if using magento2 loader component
            });
        }
    });
});
