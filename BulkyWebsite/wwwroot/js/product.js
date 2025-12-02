document.addEventListener("DOMContentLoaded", function () {

    loadDataTable();

});

function loadDataTable() {

    dataTable = $('#tblData').DataTable({

        ajax: {

            url: '/admin/product/getall',

            type: 'GET',

            dataSrc: 'data'

        },

        columns: [

            { data: 'title', width: "15%" },

            { data: 'isbn', width: "15%" },

            { data: 'listPrice', width: "15%" },

            { data: 'author', width: "15%" },

            { data: 'category.name', width: "15%" },

            {

                data: 'id',

                render: function (data) {

                    return `
<a href="/Admin/Product/Upsert?id=${data}" class="btn btn-sm btn-primary mx-2"> <i class="bi bi-pencil-square"></i> Edit</a>
<a onClick=Delete('/Admin/Product/Delete/${data}') class="btn btn-sm btn-danger" mx-2>  <i class="bi bi-trash-fill"></i>Delete</a>

                    `;

                },

                width: "15%"

            }

        ]

    });

}
