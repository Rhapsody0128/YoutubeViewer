<template lang="pug">
  #search
    Sider
      Menu(:theme='theme2')
        Submenu(name='1')
          template(slot='title')
            Icon(type='ios-paper')
          MenuItem(name='1-1') das
          MenuItem(name='1-2') zz
          MenuItem(name='1-3') ffa
        Submenu(name='2')
          template(slot='title')
            Icon(type='ios-people')
          MenuItem(name='2-1') sadasd
          MenuItem(name='2-2') zc
        Submenu(name='3')
          template(slot='title')
            Icon(type='ios-stats')
          menugroup(title='使用')
            MenuItem(name='3-1') fsadf
            MenuItem(name='3-2') asdasd
            MenuItem(name='3-3') asd
          menugroup(title='留存')
            MenuItem(name='3-4') asd
            MenuItem(name='3-5') asdas
</template>
