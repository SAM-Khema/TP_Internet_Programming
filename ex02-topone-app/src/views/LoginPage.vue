<template>
  <header>
      <p>Admin dashboard</p>
      <p>លេខមួយ.com</p>
  </header>   
  <div class="ct-login">
    <div class="login-box">
      <p>Admin</p>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Submit</button>
    </div>
  </div>
</template>

<style>

header {
  width: 100%;
  height: 80px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  position: fixed;
  z-index: 999;
  padding: 0 40px;
}

.ct-login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

.login-box {
  padding: 40px;
  width: 500px;
  height: 300px;
  border: 2px solid black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.login-box input{
    width: 80%;
    padding: 0 10px;
    border: 1px solid black;
    outline: none;
}

.login-box button{
    width: 90px;
    height: 30px;
}

</style>