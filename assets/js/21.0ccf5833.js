(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{598:function(t,v,_){"use strict";_.r(v);var r=_(7),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),_("p",[_("font",{attrs:{color:"#e93011"}},[t._v("一个进程好比是一个程序，它是资源分配的最小单位。同一时刻执行的进程数不会超过核心数。")]),_("br")],1),t._v(" "),_("p",[t._v("不过如果问单核CPU能否运行多进程？答案又是肯定的。"),_("br"),t._v("单核CPU也可以运行多进程，只不过不是同时的，而是极快地在进程间来回切换实现的多进程。举个简单的例子，就算是十年前的单核CPU的电脑，也可以聊QQ的同时看视频。")]),t._v(" "),_("p",[t._v("电脑中有许多进程需要处于「同时」开启的状态，而利用CPU在进程间的快速切换，可以实现「同时」运行多个程序。而进程切换则意味着需要保留进程切换前的状态，以备切换回去的时候能够继续接着工作。所以进程拥有自己的地址空间，全局变量，文件描述符，各种硬件等等资源。操作系统通过调度CPU去执行进程的记录、回复、切换等等。")]),t._v(" "),_("h3",{attrs:{id:"线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),_("p",[t._v("如果说进程和进程之间相当于程序与程序之间的关系，那么线程和线程之间就相当于程序内的任务和任务之间的关系。"),_("font",{attrs:{color:"#e93011"}},[t._v("所以线程是依赖于进程的，也称为 微进程。它是程序执行过程的最小单元。")])],1),t._v(" "),_("p",[t._v("线程能够共享进程的大部分资源，并参与CPU的调度。"),_("br"),t._v("意味着它能够在进程间进行切换，实现「并发」，从而反馈到使用上就是拖动进度条的同时，画面和声音都同步了。所以我们经常能听到的一个词是「多线程」，就是把一个程序分成多个任务去跑，让任务更快处理。不过线程和线程之间由于某些资源是独占的，会导致锁的问题。例如Python的GIL多线程锁。")]),t._v(" "),_("h3",{attrs:{id:"进程与线程区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程区别"}},[t._v("#")]),t._v(" 进程与线程"),_("font",{attrs:{color:"#005cc5"}},[t._v("区别")])],1),t._v(" "),_("p",[t._v("▲ 进程是CPU资源分配的基本单位，线程是独立运行和独立调度的基本单位（CPU上真正运行的是线程）。"),_("br"),t._v("\n▲ 进程拥有自己的资源空间，一个进程包含若干个线程，线程与CPU资源分配无关，多个线程共享同一进程内的资源。"),_("br"),t._v("\n▲ 线程的调度与切换比进程快很多。"),_("br"),t._v("\n▲ CPU密集型代码(各种循环处理、计算等等)：使用多进程。IO密集型代码(文件处理、网络爬虫等)：使用多线程")]),t._v(" "),_("h3",{attrs:{id:"协程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协程"}},[t._v("#")]),t._v(" 协程")]),t._v(" "),_("p",[_("font",{attrs:{color:"#e93011"}},[t._v("协程，又称微线程，纤程。英文名Coroutine。一句话说明什么是线程：协程是一种用户态的轻量级线程。")])],1),t._v(" "),_("p",[_("strong",[t._v("协程拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈")]),t._v("。因此：\n协程能保留上一次调用时的状态（即所有局部状态的一个特定组合），每次过程重入时，就相当于进入上一次调用的状态，换种说法：进入上一次离开时所处逻辑流的位置。")]),t._v(" "),_("p",[t._v("⭐️  协程的好处：")]),t._v(" "),_("p",[t._v("🚩  无需线程上下文切换的开销"),_("br"),t._v("\n🚩  无需原子操作锁定及同步的开销"),_("br"),t._v("\n🚩  方便切换控制流，简化编程模型"),_("br"),t._v("\n🚩  高并发+高扩展性+低成本：一个CPU支持上万的协程都不是问题。所以很适合用于高并发处理。\n🚩  节约内存，在64位linux中，一个线程需要分配8MB栈内存和64MB堆内存，系统内存的制约导致无法开启更多线程实现高并发，而在协程模式下，可以轻松有几十万协程，这是线程无法比拟的。")]),t._v(" "),_("p",[t._v("⭐️  缺点：")]),t._v(" "),_("p",[t._v("🚩  无法利用多核资源：协程的本质是个单线程,它不能同时将 单个CPU 的多个核用上,协程需要和进程配合才能运行在多CPU上.当然我们日常所编写的绝大部分应用都没有这个必要，除非是cpu密集型应用。"),_("br"),t._v("\n🚩  进行阻塞（Blocking）操作（如IO时）会阻塞掉整个程序。")]),t._v(" "),_("h3",{attrs:{id:"最佳实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),_("p",[t._v("🚩  线程和协程推荐在IO密集型的任务(比如网络调用)中使用，而在CPU密集型的任务中，表现较差。"),_("br"),t._v("\n🚩  对于CPU密集型的任务，则需要多个进程，绕开GIL的限制，利用所有可用的CPU核心，提高效率。"),_("br"),t._v("\n🚩  所以大并发下的最佳实践就是多进程+协程，既充分利用多核，又充分发挥协程的高效率，可获得极高的性能。")]),t._v(" "),_("h3",{attrs:{id:"补充问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充问题"}},[t._v("#")]),t._v(" 补充问题")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("为什么有了线程还需要协程")]),t._v(" "),_("ol",[_("li",[t._v("线程内存占用")]),t._v(" "),_("li",[t._v("线程竞争")]),t._v(" "),_("li",[t._v("线程切换耗时")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);