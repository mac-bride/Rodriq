$(document).ready(function() {
    JsBarcode("#barcode", "Stingy", {
        // format: "pharmacode",
        lineColor: "#black",
        width: 1,
        height: 14,
        displayValue: false,
        textAlign: "left",
        margin: 0,
    });

    // swal("Hello world!");


    $('#id-card-no').html(`${"ID No".bold()} : SMA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
    $('#issued-date').html(`${new Date().toJSON().slice(0, 10).replace(/-/g, '-')}`);
    $("#share").attr('href', `whatsapp://send?text=${document.URL}`)
        // Bind Name

    $("#name").keyup(() => {
        $("#id-card-name").text($("#name").val());
        JsBarcode("#barcode", $("#name").val().substring(0, 6), {
            // format: "pharmacode",
            lineColor: "#black",
            width: 1,
            height: 14,
            displayValue: false,
            textAlign: "left",
            margin: 0,
        });

    });


    // Bind date of birth
    $('#date-of-birth').change(() => {
        $('#id-card-date-of-birth').text($('#date-of-birth').val())
    });

    // Bind Height
    $('#date-of-birth').keyup(() => {
        $('#id-card-date-of-birth').text($('#date-of-birth').val())
    });

    // Bind motto
    $('#motto').change(() => {
        $('#selected-motto').text($('#motto').val())
    });
    // Bind Branch
    $('#branch').keyup(() => {
        $('#id-card-branch').text($('#branch').val())
    });

    // BindWeight
    $('#weight').keyup(() => {
        $('#id-card-weight').text($('#weight').val() + "kg")
    });

    document
        .getElementById('mugshot')
        .addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                FR.onload = function(e) {
                    var img = document.getElementById('id-card-mugshot');
                    img.src = e.target.result;
                };
                FR.readAsDataURL(this.files[0]);
            }
        });

    $("#support").click((event) => {
            event.preventDefault();
            // alert("dsd")
            swal({
                    title: "Please Support",
                    text: "If you enjoy our free service, please support through 683780274",
                    icon: "info",
                    closeOnClickOutside: false,
                    buttons: {
                        cancel: true,
                        confirm: "Support",
                    },
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Thank you for the Support", {
                            icon: "success",
                        });
                    } else {
                        swal("Stay STINGY :)");
                    }
                });

        })
        // // Bind Image
        // $('#mugshot').change((this) => {
        //     // console.log(event.target.files)
        //     // var image = $('#id-card-mugshot');
        //     // $("#id-card-mugshot").attr("src", URL.createObjectURL(event.target.files[0]));
        //     if (this.files && this.files[0]) {
        //         var FR = new FileReader();
        //         FR.onload = function(e) {
        //             $("#id-card-mugshot").attr("src", e.target.result)
        //                 // var img = $('#id-card__mugshot');
        //                 // img.src = e.target.result;
        //         };
        //         FR.readAsDataURL(this.files[0]);
        //     }
        //     // $('#id-card-uploaded-image').text($('#weight').val() + "kg")
        // });




    const downloadCharacterSheet = () => {
        var vp = document.getElementById("viewportMeta").getAttribute("content");

    document.getElementById("viewportMeta").setAttribute("content", "width=800");

        const node = document.getElementById('id-card');

        html2canvas(node).then(canvas => {
            // document.body.appendChild(canvas)
            // var img    = canvas.toDataURL("image/png");
            // document.write('<img src="'+img+'"/>');
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = canvas.toDataURL()
            link.click();
        });
        swal({
                title: "Please Support",
                text: "If you enjoy our free service, please support through 683780274",
                icon: "info",
                closeOnClickOutside: false,
                buttons: {
                    cancel: true,
                    confirm: "Support",
                },
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Thank you for the Support", {
                        icon: "success",
                    });
                } else {
                    swal("Stay STINGY :)");
                }
            });
         document.getElementById("viewportMeta").setAttribute("content", vp);

    };

    const bindInputToElement = (inputEl, elementEl) => {
        inputEl.addEventListener('change', () => {
            elementEl.textContent = inputEl.value;
        });
    }

    document
        .getElementById('download-button')
        .addEventListener('click', downloadCharacterSheet);

    document
        .querySelector('.id-card__subject-id')
        .textContent = md5('something').slice(0, 8);

});



// bindInputToElement(
//     document.getElementById('date-of-birth'),
//     document.getElementById('id-card-date-of-birth')
// );

// // Bind gender
// bindInputToElement(
//     document.getElementById('gender'),
//     document.getElementById('id-card-gender')
// );

// // Bind height
// bindInputToElement(
//     document.getElementById('height'),
//     document.getElementById('id-card-height')
// );

// // Bind weight
// bindInputToElement(
//     document.getElementById('weight'),
//     document.getElementById('id-card-weight')
// );

// // Bind mugshot
// document
//     .getElementById('mugshot')
//     .addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var FR = new FileReader();
//             FR.onload = function(e) {
//                 var img = document.getElementById('id-card-mugshot');
//                 img.src = e.target.result;
//             };
//             FR.readAsDataURL(this.files[0]);
//         }
//     });
