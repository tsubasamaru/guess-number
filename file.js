<script>
            function check(){
                let a = Math.floor(Math.random()*2);
                let b = document.getElementById("i1").value;

                if(a == b){
                    document.getElementById("result").textContent = '同じ';
                }else{
                    document.getElementById("result").textContent = 'ハズレ';
                    document.getElementById("num").textContent = a;
                }
            }
</script>
