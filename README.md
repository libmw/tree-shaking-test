# tree-shaking-test
test how treeShaking works

## 结论

+ 对于5以上的webpack版本，只要是在production模式下，不需要任何配置就默认能够对esModule摇树优化。

+ ant-design-vue在3以上的版本，已经做了很多摇树优化的工作。比2版本少了500kb的必须依赖。

+ 对于一些模块，是无法摇树优化的，除非你去修改模块的源码，因为它本身就没做摇树优化，而引用的文件是编译完成后的东西。