(this["webpackJsonpjbk005.github.io"]=this["webpackJsonpjbk005.github.io"]||[]).push([[4],{142:function(e,t,n){},143:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":["#f44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"retina_detect":true}')},147:function(e,t,n){},168:function(e,t,n){},170:function(e,t,n){},176:function(e,t,n){},297:function(e,t){},310:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},321:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(7),r=n(9),o=n(8),s=n(0),l=n.n(s),c=n(42),m=n(141),u=n.n(m),d=n(88),h=n.n(d),p=(n(142),n(143)),g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isVisible:!e.state.isVisible})}),1e3)}},{key:"getName",value:function(){return c.name.split("").map((function(e,t){return l.a.createElement("span",{className:"animatedLetter",key:t},e)}))}},{key:"render",value:function(){return l.a.createElement("section",{id:"Home"},l.a.createElement(h.a,{className:"Background",params:p}),l.a.createElement("div",{className:"Content ".concat(this.state.isVisible?"Activated":"")},l.a.createElement("h1",null,this.getName()),l.a.createElement("h4",null,l.a.createElement(u.a,{strings:c.proffesions,typeSpeed:40,backSpeed:50,backDelay:1e3,cursorChar:"_",loop:!0}))))}}]),n}(s.Component),y=n(47),b=n(55),f=n(16),k=(n(147),n(332)),E=n(333),w=n(334),v=n(89),j=n.n(v),C=n.p+"static/media/selfie.f8b8548d.jpg",O=n(63),P=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={__html:c.about_me},t=this.props.isVisible;return l.a.createElement("section",{id:"About"},l.a.createElement(k.a,{className:"Content ".concat(t?"Visible":"")},l.a.createElement(E.a,null,l.a.createElement(w.a,{className:"LeftSide"},l.a.createElement(j.a,{className:"Selfie",src:C,fallback:l.a.createElement(f.a,{size:48})}),l.a.createElement("div",{className:"Text"},l.a.createElement("p",null,"It's me!"),l.a.createElement(y.a,{icon:b.i}))),l.a.createElement(w.a,{className:"RightSide"},l.a.createElement("h1",{className:"sectionTitle"},"About me"),l.a.createElement("p",{dangerouslySetInnerHTML:e})))))}}]),n}(s.Component),x=Object(O.withIsVisible)(P),S=(n(168),n(340)),N=n(335),Z=n(343),D=n(336),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlkAAAJZCAMAAACtJtB1AAAAY1BMVEX///9OWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkxOWFlsvkzUno4jAAAAH3RSTlMAEBAgIDAwQEBQUGBgcHCAgJCQoKCwsMDA0NDg4PDwFagsVAAAGDlJREFUeJztnYliGzcSRH0kcbJJ1t61E3vjS///lRsqkj0UORyg0AC6G+99gK2jRPZ0PYDPngEAAAAAzObl6+ezvwTIyOvPXz+/nv1FQDp++fj1xMdfZn8hkIof33995P3L2V8MpOH5269b/sO4BSb8/vnrOZ9/n/0lQQJeffx6yf9ezf6yIDgv31/J1Yk/GLdA5/nrnVydYLsFKr8+HbCejFu/zv4CISSv/nczVyfeM25BLS//OMzVibeMW1DD89e33wg3b4mMW1DOr9c2DXtQ+EAhP+5tGvZ4/+PsLxkC8KTKKeMtb4lwQPGAdQ6FD9zkl5oB65yPbCBgj90qpwz8GrjK8/805eoEfg1ccuHKKFD4wBOuujIK+DWwobDKKQO/Bh646coIUPjAPQeujMJHxi141bZp2AO/ZnFeKlVOGRQ+C1PuyihwoHpZGqqcMvBrlqTalVGg8FkOyZVRoPBZC5Mqpwz8moUwq3LKwK9ZhEZXRoHCZwEMXBkFCp/sdKhyysCvSU3Bsed+UPikxdSVUeBAdUr6Vjll4NckpOrYcz8ofJLRyZVR4EB1IoZVOWXg12TBwYB1DoVPCrq7MgoUPuGZUOWUgV8TmklVThn4NXEZ6MooUPgEZbAro8CB6oBMr3LKwK8JhvWx545Q+ERimiujwIHqMDiqcsrArwlBx2PP/aDwcY8HV0aBA9XOcVnllIFf45ghx577gV/jFGeujAKFj0ecVzll4Ne4I0CVUwZ+jSvcujIKFD5ucO3KKFD4+CBUlVMGfo0Dph577gd+zWSCuDIKHKieSCBXRoAD1dNwcuy5HxQ+UwjnyihQ+AwnQZVTBn7NWIK6Mgr4NQMJ7MooUPgMIrgro8CB6gGkq3LKwK/pTQpXRoHCpytpXBkFCp9uJK5yysCv6ULuKqcQCh97EroyChyoNiapK6PAgWpDQh577geFjxFRjz33g8LHhMWqnDLwa5pZsMopA7+miWVcGQUKHx0GrJtwoFpk6SqnDPwagVTHnvtB4VPJoq6MAoVPDVQ5FeDXFEOVUwl+TRHLuzIKHKg+BFdGgwPVB6Q/9twP/JobLHHsuR8UPjtQ5TSDX3MNqhwD8GsuwJUxgsLnDFwZQzhQ/Q2qHGPwa/5h2WPP/cCveYYr04nlCx+qnG4s7ddQ5XRl3cIHV6YzixY+uDIDWPBANceeB7GYX8Ox53EsVfjgygxlmQPVVDnDWcKvwZWZQv7ChwFrEskLH6qciST2azj2PJmkfg2ujAMyFj64Mi5Id6CaKscNqfwaXBlXpCl8cGW8keRANVWOQxL4NRx7dkrwwgdXxjGRD1RT5bgmrF/DsWf3hCx8cGVCEK7wocoJQyy/hionEIH8GlyZYAQpfHBlAhLgQDVVTlC8Fz6pjz1/fpv5u3Nd+OR2Zd4+T94puD1QvcSPPXcP6tKvyX3seaNipnY3HBY+qX/e5+Nt7r8hZweqc1c5Fw1I8vd9P35N7mPPV1vb5OOWkw1E6jeH3eoj9du/i8Ind5Vz46839054ul+Tu8o5mDhyH0ma6tfkdmUKltK5V8PzCp/crkzZzzV3nTWn8Mn991pc/ucetyb4NblnjKr5NfePYrBfk/sPtfqZO/XL99AD1amHC0kMT/0TGebX5N4/i91G7lfxIYVP7s6soY/NvdobUPhk/vk1jhSp64j3VgHaJXGy2h+DEm/4SJaMyeombytBskTM1s1Zxy2SpWF5BD3nuEWyFKxr/YzjFsmqp4P5nXDcIlm1dDqtkm7cIlmV9Dthl+xiOpJVRV9JJNUBAZJVQXexLdOhJpJVzgg7JM9BTJJVyqgDBFnGLZJVxshDTznGLZJVgrhpeC7OZSnGLZJVgOga/fpRXqomGLdI1iHi/WMP4VDtyvDjFsk6QNw0bN7QVLsy+LhFsm4jbhrOUqH2QbE9b5J1C1EavdBi1CfLyGdTSNY+Yh6udsvqNizu3Ugkaw/xSqhdH0Z0BcNeRUmydlA3Dfs5UG8vCzpukayriLuCg1P1S41bJOsK4unxgptAFhq3SNYF4vHUwoFIXGPEG7dI1lPETUPxq4oqeUW7G4lknSNKo1U9nyqmxrobiWRtUTcNtU9v6rH9SHcjkawN4spJGYHkccv+u+4EyfqGuGkQpYT04xbJekA0qRqOCaqfDhhk3CJZ96ibhrajzerZxRDjFsk6If6Km69jUG92izBukSx5C2DyrqReFut/3CJZ4iht9quVxy3nhc/yydI2DaZvR6rO7PtupMWTJTbExgWxqjO7vhtp6WSJm4YOUot6eszx3UgLJ0s9ntpHxFNPj7kdt9ZNlrhp6GezJBu3Vk2W+ETW9XxprnFrzWSJm4buZ+JVndnjuLVksqZUOWWoOrO/cWvBZIm/vFHjjHrTvDedeblkiW84A18T1NNjzu5GWixZ4pA8uKVTxy1XdyOtlSztwX6CWaCOW47uRlopWeIyco4NpV6362bcWidZoq8y7XyyqjN7GbeWSZb2GjD1TgX19JiPcWuRZInHsGa/tainxzyMW0skS3zW8vD7iTtuLZAscT/k4z1FPz02e9zKnyxx0+Cn5ZV15rk/+ezJEjcNvswU+fTYzLfz3MlSpVEHA9YZ+umxeX8hmZMl/j48Kin66bFp41biZGmP7G4PiUYbt9ImS1wzej7YrurMc8atpMkSNw3OL+OQdeYZ41bOZGn23PQV0DHy6bHxh/UzJkvbNAS5Y1Y+PTb65ThfssQ/aw9VThnyZ4+N/TKzJUscRZxUOWVI3+PwZ95kydK21V6UpmLqK/bxz7ypkiVuGnxVOWXU6cwznnkTJUu0AtxVOYWUP//OeebNkyxx0xBpwDqndGc36Zk3S7K0wy6OXBmFknFr2jNvjmSJ0qjnKqeMoz+oiS/JGZKlbhp8VzmF3PI5pr4kJ0iWujkMsnQ/Yv/BZe4zb/hkqXLJCf9XXxdxfdkyu10Pniz1/MEjs3/8RlyqaPP/aGInSz0ztSH+FH/P+U/Cwxt95GSp12qcE3zz8MhWZ3bxqdNxk6VeBXRJ4G3plseJ00m7HjVZ6vVl14na8Dzh1Me7adeDJkvdNOziYDAx4PNrP+16yGSpXuUt3PytZyFgstSjd0c4mU+yEC9ZBpuGPVw8U2UhWrLUG6XK8LAHykKsZKm34JUzf3edhUjJst007JGk8JlOoGSpH+5QTZLCZzJhktVj07BHksJnLkGSpZ46V0lS+MwkRLLUi8laSFL4zCNCsvpuGnZhA9GE/2T13zTsQeHTgvdktUqjbVD46DhP1rBNwx4UPiquk2UjjbZB4SPiOFmjNw17UPhIuE2WeidnDyh8BLwmS/3Yhif8bPKvUPgI+EyW0abh57/uPhlli8KnFo/JMto0vHh3d+LPH0z+NQqfShwmy6jKefPl7oE3L0z+QQqfKtwly2jT8POnu+98+c3k36TwqcFZsoyOp/7w4e6cD1bjFoVPKa6SZbRpePHm7pJ3RuMWhU8hnpJldDz1ty9XgvX3W+Ibk3+dwqcQP8lquQhrw09P3wi/8+lfJv8DhU8RXpJldDz1YdOwx4efTP4XCp8CnCTLaNPw7+tvhBv+a7WBoPA5wEWyjKTRs03DHl/+bfJ/Ufgc4SBZVpuGPwtydT9uUfiMYHqyjI6nXt007EHhM4DZyTLaNPyr5I1wA4VPd+Ymy+h46o1Nwx4UPr2ZmSyrTcN/q3N1gsKnL/OSZXU89XjTsAeFT0+mJctq0/CXmqs7Cp+uTEqWkTRavGnYg8KnG1OSZXUR1hv5jfA7FD6dmJEso+OptZuGPSh8ujA+WUabhgu5T4fCpwejk2V0PFXcNOxB4WPP2GRZbRp25L4GKHysGZosq+OpLZuGXSh8bBmYLKNNw4Hcp0PhY8qwZFldhGWxadiDwseQUcky2jQUyX0NvDN6S6TwGZQso+OphpuGPSh8rBiRLKtNQ43cp0PhY0P/ZP1hdBGW/aZhjw9WG4ilC5/+ybJBkPsaoPBpZ8iHJDXTbdOwB4VPIx6umC1Al/t0/qLw0TE6jtWb3puGPSh8RDxdMXuDZrmvAQofBaMOrzODNg17fKLwqWXeh9lUYSX36VD4VDH3w2yKGbtp2IPCp5zpH2ZThLHcp0PhUwibhmoofArw8mE2B/SR+3QofA6Y8bG5AjM3DXtQ+Nxi0sfm1tJT7tOh8NmFTUMjFD5XsTqX3JkBcl8DFD6XsGmwgcLnHKNzyb0ZJ/fpUPhsMLoBrTfeNg17UPg8EmPTMFzua8Cq8HkVetxi09ABCh/kvl7YFT6zIyLBpqEjKxc+Rnetd2ay3NfAqoWP0ae69SbCpmEPs8Ln90AbCOS+IaxX+LBpGMVahQ9y30isCp9f3G8g2DQMZpHCh2OEE1ih8OEY4RyyFz7IfdNIXfiwaZhK3sIHuW82OQsfNg0eyFf4cIzQCckKH44ROiJT4YPc54sshQ+bBn9kKHyQ+1wSv/Bh0+CV2IUPxwg9E7fw4Rihc6IWPjE2Dc+eLTZhnRGx8DHaNPxg9We1z8rJilf4GMl9f0/WH0z+oVusnaxYhY/VpuE0WZOs7sQpfIyOEf4zWZOsAcQofIyOET52eCRrCP4LHyO578W3Do9kDcJ54WO0adh0eCRrFJ4LHyO578wWJlnj8Fr42G0azr5bk3/0FiTrOx4LH6tjhE9tYZI1FH+Fj9ExwssOj2QNxlfhYyT3XbOFSdZw/BQ+ZpuGq9+myb99C5J1gZPCx0ju++26LUyyZuCh8OmxadhCsuYwu/AxOkZ44wY0kjWLmYWP1THCW+eSSdY8phU+RnLf7RvQSNZE5hQ+VpuGg18syZrK+MLHSO47vgGNZE1mcOFjtWk4Po5FsmYzsvAxOkb4c8nvlGTNZ1ThY3SMsPCudZLlgSGFj9GmofTiF5Llg+6Fz5BNwxaS5YS+hY+R3Fdz8QvJckO/wsdq01B18QvJckSnwsfoGGHlxS8kyxUdCh+jY4TVF7+QLF9YFz5Gct8P9Z/qRrK8YVr4DN40nH0fJv/zLUhWLWaFj9HpCe2KWZLlELPCxwL1ilmS5RKrwqcZ/YpZkuUUq8KnjYYPsyFZbrEqfHSarpglWX4xK3w0Gj/MhmR5xqrwEXjR+mE2JMs3VoVPLe0fZkOyvGNV+NRg8bG5JMs9ZoVPKYXS6AEkKwBWhU8ZRh+bS7JCYFX4HFMujR5AsmIwqPAx/NhckhWFT/3fEo+Pp1ZAsuLQu/DZuQhL/Wr7frHPSJYlPQsfi03DFpIVii+9NhA2m4YtJCsYfQqf1irnCisl64PpHDEN+8LHbNOwZZ1knVbZRkvAyXyxLXxUafSAVZL18NvQFUlXGBY+ppuGLYsk6/s7iPUj0CQ+/GTz26k8nlrzFdp8gTdw8Js8n3rbBREXWBQ+RRdhiSyQrEs1s8OT0ASaCx/7TcOW/Mm6tl3s+zMdRlvh0/nvK3uy9hqRLOOWvIHoPhPkTtatY3tJxi3tZavTpmFL5mQdDCLNZwgcoL1mDdm9JE7Wu8OfunDDiivEOavfpmFL2mSVGb49H7t7Iz4bNh1PrSBpssqdAFspaSDaPmvcy3TOZNUUazHHLW0HP/J7zZis2rHWUP4ehNgbDn0czpcsZawdNXvYILoOg1d46ZIlVh5jnpdMOH7mvcZwyyNdstQ2rZtNYozolI4309IlS2/TIoxbogc/490+YbL0Ns39uKUNWHP+ZFImSz8+5VpnFqucSVuVpMmS78vzqzOrVc6sTXDWZDWMWy4LH/EvZaIslDdZDeOWv8JHq3KmCo6Zk5Vm3BKPU8z9LnInK8W4JX7qwOxX3uTJ0sctLzqzWOXMX86lT5Z+Wt2FzixWOQ4KhQWSpV9PPN2vEascF87ZEsmSLweae3pMrXI8/MRXSZZ+OdDEcUt7pXVzlHKVZIUbt8Qvd/ob+DfWSZY8bs0o3sQn2tmbhi0rJUset0afHhO3cL56qaWSpY9bQ6dirTnwsGnYsliy9HFr2JO8WOW4062XS5Z8F+OYcUutcvw5i+slS7+LsX9jIkr8Lm8RWDFZ+odvdX5p0KocR5uGLWsmS/4l9hxnxLi7qDevsGqyGsatTl+P9hbta9OwZdlkORu3xCrHkUb2lIWT5WjcElch7jYNW5ZOlj5umYrA4vrW4aZhy+LJ0g/rm70PqVXOdGn0gNWTJe8mrWZntcrx/EZ4D8nSP2nEwCwQD6553TRsIVkn1E8aaRy3xJdLL4c/bkOy7pkxbon/p+dNwxaS9YA6bskvIOLrpLNDtvuQrG+o45Y09IirNOebhi0ka4M6blU/qInrf/ebhi0ka4s8btVpLGKV40waPYBknTPgsL5a5QTYNGwhWU9R70YqHLfEKifGpmELybpEvBupZC8uujJujqdWQLKuoN6NdGgNi5kNs2nYQrKuoo5bN0+Pie+zno6nVkCydlDHrd1BWwyrX2n0AJK1i+m4pVY5sTYNW0jWPvK4dbnQFHewrqXRA0jWLeRx67yEEXsjJxdhiZCs28iH9b+/2ohVTsRNwxaSdUTj6TH19Jl/afQAknWIfDfSadwSX/OCbhq2kKwC5LuR3i22adhCsopQxy2FKNLoASSrEPXm72oibxq2kKxS1HGrjkDS6AEkqxx13CrH5UVYIiSrhs7jVvhNwxaSVYW6nSohwvHUCkhWJerdSEek2DRsIVnVqHcj3SLJpmELyRJQ70baJaQ0egDJUrAdt/JsGraQLA27cSvU8dQKSJaKzbgV4CIsEZKlYzBuJds0bCFZDaiH9R+Jdzy1gv7JSlRYXKLejXQiujR6wDu7CO2R+BX/Tr8bKeWm4TvqCYJK0k6p90jnchJIozdQTz3Vk/uFv37cyrppeEA8qamRelitHLcCH08tQZ4PVBi3Hoh2EVYdLc80KnmXgvcUjlu5X7xb9zAqmZTJS0p+qrkHTvmiVwNiHyg/4vBRO/erdg+9qIIsR1Ouc/NupNybhl5KZDnJn4x2n7jTSaNn9NS4y8m9zbm+JUz+92TuQqrkdN0euTJu5Z4B+h+XqyD3j/rJuJX7uWXMEd9yEp4p2LIZt5JvGlwMWOckH2kfx63cm4aRV6lUkPwx/DR95O60BrkyCrklpT+TD1jDXBmF5ENIZoa6Mgq5K9q0qJ/EMJTcs0hKZrgyErmfn9Ixy5VRyO3XJGOiK6OQ+zEqEcNl5HZyW7xJCDNgnZFcZ06AD1dGIbdfEx43roxCbr8mNJNl5HZy+zVh8ebKKCTXL2MSdsA6J7dfExCnroxCbr8mGK5k5HZy+zWByDBgnZNcZ46Ce1dGgXFrOiFcGQX8mqk4lpHbofCZhm8ZuR105kkEc2UU0JknENCVUcCvGUxMV0YBv2YkkWTkdtCZhxHalVHArxlCeFdGAb+mO/Mv7psDfk1f4srI7aAzdySRK6PAuNWJZK6MAn5NB/K5Mgr4NeYsPGCdg19jSlpXRgGd2YzUrowChY8J2V0ZBfwaA1LKyO3g1zTCgLULOnMD67gyEoxbImu5Mgr4NRILyMjtcF1gNYvIyO2gM1exqiujgF9TzsqujAJ+TSHLycjt4NcUgCsjgc58AK6MCn7NTRiwGsCv2WVxGbkd/JqrMGAZgM58Aa6MDYxbT8CVMQO/ZgOujCn4NQ8gI5uDX3OHK9MHdGZcmV4s7tfgynRkYb8GGbkvq14XiCvTnyV1ZlyZISzn1yx5cd8clvJrkJFHspDOzIA1mEV0ZlyZCSzg1+DKTCK5X4OMPI/Ufg2uzFTS6sy4MtNJ6dfgyrggXeGDjOyFZH4NA5YjEunMuDLOSDJu4cr4I4Nfg4zsk/B+DTKyW0LrzLgyrgnr1+DKeCemX4OMHIGAfg2uTBCC6cy4MoEING7hysQijF/DgBWOEH4NA1ZI3OvMuDJhca0z48pExrFfgysTHKd+DTJyAhz6NbgySXDm1+DK5MGVX4Mrkwo3fg0ycjpcXBfIgJWR+TozrkxWJvs1XNyXmIl+DTJycib5Nbgy+ZmiMzNgLcFwvwZXZhmG+jXIyEsxzK/BlVmNQTozrsyCDPBrcGUWpbNfg4y8MB0LHwastemmM+PKLE+XcQtXBp518GtwZeAfbP0aZGT4jqHOjCsDZxj5NbgycIGBX8PFfXCNVr8GGRn2aNKZcWXgBvK4hSsDB0h+DTIyHCP4NQxYUESlzowrA8VU6My4MlBFYeGDKwO1FPk1yMggcOjX4MqAyE2dGVcGdPb9GlwZaGPHr0FGhmauXBfIgAUmPNGZcWXAiq1fgysDlnzza5CRwZh7vwZXBjrwGwMWAAAAAACk5P8qkKsKQV7iuAAAAABJRU5ErkJggg==",T=n.p+"static/media/autocad_logo.9efd95e2.png",V=n.p+"static/media/python_logo.38f94c57.png",A=n.p+"static/media/mysql_logo.ab89a6ef.png",H=n.p+"static/media/django_logo.4c677b78.png",B=n.p+"static/media/linux_logo.27c55c0d.png",W=n.p+"static/media/windows_logo.31350da5.png",G=n.p+"static/media/aws_logo.fea4265a.png",J=n.p+"static/media/azure_logo.b3a6acdc.png",F=n.p+"static/media/firebase_logo.733a92d9.png",I=n.p+"static/media/androidstudio_logo.946b54ab.png",z=n.p+"static/media/blender_logo.b91e168d.png",M=n.p+"static/media/gimp_logo.33c3e40b.png",K=n.p+"static/media/git_logo.9610d7a3.png",U=n.p+"static/media/pycharm_logo.de0be0ea.png",R=n.p+"static/media/xl_logo.69ae21d5.png",X=n.p+"static/media/vs_logo.0ed63465.png",q=n(325),Y=n(92),Q=n.n(Y),_=(n(170),n(171)),$=n(54),ee=new Map,te=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={particlesHeight:0},e.containerRef=l.a.createRef(),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({particlesHeight:this.getContainerHeight()})}},{key:"getContainerHeight",value:function(){return this.containerRef.current.clientHeight}},{key:"getLayout",value:function(e,t,n,a){return l.a.createElement(ne,{icon:e,counter:t,title:n,id:a})}},{key:"getProjectsCount",value:function(){if(c.projects.length>0)return this.getLayout(b.d,c.projects.length,"Projects","projects")}},{key:"getExperienceTime",value:function(){var e=Q()(c.startTime,"YYYY-MM-DD"),t=Q()(),n={year:t.diff(e,"years"),months:t.diff(e,"months"),days:t.diff(e,"days"),hours:t.diff(e,"hours"),minutes:t.diff(e,"minutes"),seconds:t.diff(e,"seconds")};return n.year>0?this.getLayout(b.c,n.year,(1===n.year?"year":"years")+" of experience","experience"):n.months>0?this.getLayout(b.c,n.months,(1===n.months?"month":"months")+" of experience","experience"):n.days>0?this.getLayout(b.c,n.days,(1===n.days?"day":"days")+" of experience","experience"):n.minutes>0?this.getLayout(b.c,n.minutes,(1===n.minutes?"minute":"minutes")+" of experience","experience"):this.getLayout(b.c,n.seconds,(1===n.seconds?"second":"seconds")+" of experience","experience")}},{key:"getClientsCount",value:function(){if(c.clientsCount>0)return this.getLayout(b.b,c.clientsCount,"Total clients","clients")}},{key:"getAwardsCount",value:function(){if(c.awardsCount>0)return this.getLayout(b.l,c.clientsCount,"Total awards","awards")}},{key:"render",value:function(){if(this.props.isVisible){var e,t=Object(q.a)(ee.entries());try{for(t.s();!(e=t.n()).done;){(0,e.value[1])()}}catch(n){t.e(n)}finally{t.f()}}return l.a.createElement("div",{id:"ExperienceCounters"},l.a.createElement(h.a,{className:"Background",height:this.state.particlesHeight}),l.a.createElement(k.a,{ref:this.containerRef},l.a.createElement(E.a,null,this.getProjectsCount(),this.getExperienceTime(),this.getClientsCount(),this.getAwardsCount())))}}]),n}(s.Component),ne=function(e){var t=Object(_.useCountUp)({start:0,end:e.counter}),n=t.countUp,a=t.start;return ee.set(e.id,a),l.a.createElement(w.a,null,l.a.createElement("div",{className:"counterIcon"},l.a.createElement(y.a,{icon:e.icon,size:"2x"})),l.a.createElement("h4",{className:"counter"},n),l.a.createElement("p",{className:"title"},e.title))},ae=Object($.withIsVisible)(te),ie=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).languagesBinding={general:[{logo:L,name:"PTC Creo",description:"Advanced"},{logo:T,name:"Auto CAD",description:"Somewhat experienced"},{logo:V,name:"Python",description:"Advanced"}],web:[{logo:A,name:"MySQL",description:"Beginner"},{logo:H,name:"Django",description:"Beginner"}]},e.enginesBinding=[{logo:B,name:"Linux",description:"Somewhat experienced"},{logo:W,name:"Microsoft Windows",description:"Advanced"}],e.servicesBinding=[{logo:F,name:"Firebase",description:"Advanced"},{logo:J,name:"Azure",description:"Beginner"},{logo:G,name:"AWS",description:"Beginner"}],e.softwareBinding=[{logo:X,name:"Visual Studio",description:"Somewhat experienced"},{logo:I,name:"Android Studio",description:"Beginner"},{logo:U,name:"PyCharm",description:"Advanced"},{logo:R,name:"Excel",description:"Somewhat experienced"},{logo:K,name:"Git",description:"Somewhat experienced"},{logo:z,name:"Blender",description:"Beginner"},{logo:M,name:"Gimp",description:"Somewhat experienced"}],e}return Object(i.a)(n,[{key:"getEntries",value:function(e){return e.map((function(e){return e.logo?l.a.createElement(S.a,{key:e.name,placement:"top",overlay:l.a.createElement(N.a,null,e.description)},l.a.createElement(w.a,{className:"entryWithLogo"},l.a.createElement(j.a,{src:e.logo,fallback:l.a.createElement(f.a,null)}),l.a.createElement("h6",{class:"entryName"},e.name))):l.a.createElement(S.a,{key:e.name,placement:"top",overlay:l.a.createElement(N.a,null,e.description)},l.a.createElement(w.a,{className:"entry",key:e.name},l.a.createElement("h6",{class:"entryName"},e.name)))}))}},{key:"getExperience",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 0===e.length?l.a.createElement("div",{className:"Empty"},l.a.createElement("p",{className:"NoneText"},"None yet!"),t?l.a.createElement("a",{href:"mailto:".concat(c.email),className:"HireText"},"Hire me!"):null):e.map((function(e){return l.a.createElement(s.Fragment,{key:e.name},l.a.createElement("h6",null,l.a.createElement("a",{href:e.url},e.name)),l.a.createElement("ul",null,e.notes.map((function(e){return l.a.createElement("li",{key:e},e)}))))}))}},{key:"getCardLayout",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];switch(t){case"multiple":var i=n.map((function(e,t){return e.title?l.a.createElement(l.a.Fragment,{key:e.title},l.a.createElement("h4",{className:"contentSection"},l.a.createElement("span",null,e.title)),l.a.createElement(E.a,null,e.data)):l.a.createElement(w.a,{key:t},e)})),r=a?l.a.createElement(E.a,null,i):null;return l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,e),l.a.createElement("hr",null),l.a.createElement("div",{className:"card-text"},r||i)));case"list":return l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,e),l.a.createElement("hr",null),l.a.createElement("div",{className:"card-text listSection"},n)));case"text":return l.a.createElement(Z.a,null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,e),l.a.createElement(Z.a.Text,{className:"experienceDescription"},n)));default:return l.a.createElement(Z.a,null)}}},{key:"render",value:function(){var e=this.props.isVisible;return l.a.createElement("section",{id:"Experience"},l.a.createElement(k.a,{className:e?"Visible":""},l.a.createElement("h1",{className:"sectionTitle"},"Experience"),l.a.createElement("p",{className:"sectionDesc"},"You can also view my resume (in PDF) ",l.a.createElement("a",{href:"/resume"},"here")),l.a.createElement(D.a,null,this.getCardLayout("Programming Languages","multiple",[{title:"General",data:this.getEntries(this.languagesBinding.general)},{title:"Web",data:this.getEntries(this.languagesBinding.web)}]),this.getCardLayout("Human Languages","multiple",this.getEntries(c.humanLanguages),!0),this.getCardLayout("Working Experience","list",this.getExperience(c.workingExperience,!0)),this.getCardLayout("Hobbies","list",this.getExperience(c.Hobbies)),this.getCardLayout("Honors","list",this.getExperience(c.Honors)),this.getCardLayout("Education","list",this.getExperience(c.education)),this.getCardLayout("Operating System","multiple",this.getEntries(this.enginesBinding),!0),this.getCardLayout("Services","multiple",this.getEntries(this.servicesBinding),!0),this.getCardLayout("Software","multiple",this.getEntries(this.softwareBinding),!0))),l.a.createElement(ae,null))}}]),n}(s.Component),re=Object(O.withIsVisible)(ie),oe=n(175),se=(n(176),n(337)),le=n(339),ce=n(177),me=n.n(ce),ue=n(306),de=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={activeModal:-1},e.lockedProjects=[],e}return Object(i.a)(n,[{key:"showProject",value:function(e){this.setState({activeModal:e})}},{key:"hideProject",value:function(){this.setState({activeModal:-1})}},{key:"getProjects",value:function(){var e=this;return c.projects.map((function(t,n){var a=e.state.activeModal===n,i=e.showProject.bind(e),r=e.hideProject.bind(e),o=t.links.map((function(e){return l.a.createElement(se.a,{key:e.title,href:e.link},e.title)})),s="projectDescription_"+n;return e.lockedProjects.includes(n)||(e.lockedProjects.push(n),fetch(t.description).then((function(e){return e.text()})).then((function(t){return e.setState(Object(oe.a)({},s,t))}))),l.a.createElement(Z.a,{key:t.title},t.logoUrl?l.a.createElement(Z.a.Img,{variant:"top",src:t.logoUrl}):null,l.a.createElement(Z.a.Body,null,l.a.createElement(Z.a.Title,null,t.title),l.a.createElement(Z.a.Text,{className:"shortDesc",dangerouslySetInnerHTML:{__html:t.shortDescription}}),l.a.createElement(se.a,{variant:"primary",onClick:function(){i(n)}},"View more")),l.a.createElement(le.a,{show:a,onHide:function(){r()}},l.a.createElement(le.a.Header,{closeButton:!0},l.a.createElement(le.a.Title,null,t.title)),l.a.createElement(le.a.Body,null,Object(ue.isString)(e.state[s])?l.a.createElement(me.a,{source:e.state[s],escapeHtml:!1}):l.a.createElement(f.a,{size:64,className:"spinner"})),l.a.createElement(le.a.Footer,null,o,l.a.createElement(se.a,{variant:"secondary",onClick:function(){r()}},"Close"))))}))}},{key:"render",value:function(){var e=this.props.isVisible;return l.a.createElement("section",{id:"Projects"},l.a.createElement(k.a,{className:e?"Visible":""},l.a.createElement("h1",{className:"sectionTitle"},"Projects"),l.a.createElement("p",{className:"sectionDesc"},'Click on "view more" to get more detailed description and links'),l.a.createElement("hr",null),0===c.projects.length?l.a.createElement("div",{className:"noProjects"},l.a.createElement("h1",null,"No Projects!"),l.a.createElement("p",null,"Please check that later, maybe there will be something new ",l.a.createElement("span",{role:"img","aria-label":"wink"},"\ud83d\ude09"))):l.a.createElement(D.a,null,this.getProjects())))}}]),n}(s.Component),he=Object($.withIsVisible)(de),pe=(n(310),n(311)),ge=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getSocialLink",value:function(e,t,n){return t?l.a.createElement("a",{href:t,title:e},l.a.createElement(y.a,{icon:n,size:"4x"})):null}},{key:"render",value:function(){var e=this.props.isVisible;return l.a.createElement("section",{id:"Contact"},l.a.createElement(k.a,{className:e?"Visible":""},l.a.createElement("h1",{className:"sectionTitle"},"Contact"),l.a.createElement("p",{className:"sectionContent"},"Feel free to send me a message here: ",l.a.createElement("a",{href:"mailto:".concat(c.email)},c.email),", I'll try to respond as quick as I can!",l.a.createElement("br",null),"I'm also on these social media things, if you need me there:"),l.a.createElement("div",{className:"SocialIcons"},this.getSocialLink("Facebook",c.socials.facebook,pe.a),this.getSocialLink("Twitter",c.socials.twitter,pe.e),this.getSocialLink("Instagram",c.socials.instagram,pe.b),this.getSocialLink("LinkedIn",c.socials.linkedin,pe.c),this.getSocialLink("Twitch",c.socials.twitch,pe.d),this.getSocialLink("YouTube",c.socials.twitch,pe.f))))}}]),n}(s.Component),ye=Object(O.withIsVisible)(ge),be=(n(312),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"getCopyrightYear",value:function(){var e=parseInt(c.startTime.split("-")[0]),t=Q()().year();return"".concat(e.toString()," ").concat(t>e?"- ".concat(t.toString()):"")}},{key:"render",value:function(){var e=this.props.isVisible;return l.a.createElement("footer",{className:"page-footer font-small blue"},l.a.createElement("div",{className:"footer-copyright text-center-py-3 ".concat(e?"Visible":"")},"\xa9 ",this.getCopyrightYear()," by BHARATH KUMAR .J"))}}]),n}(s.Component)),fe=Object($.withIsVisible)(be),ke=(n(313),n(130)),Ee=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scrollBind=null,e.state={isVisible:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.scrollBind=this.handleScroll.bind(this),window.addEventListener("scroll",this.scrollBind)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollBind)}},{key:"handleScroll",value:function(){var e=window.pageYOffset;0!==e!==this.state.isVisible&&this.setState({isVisible:0!==e})}},{key:"render",value:function(){return l.a.createElement(y.a,{icon:b.a,className:"BackToTop ".concat(this.state.isVisible?"Visible":""),size:"2x",onClick:function(){return ke.animateScroll.scrollToTop()}})}}]),n}(s.Component),we=n(341),ve=n(342),je=(n(321),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({isVisible:!e.state.isVisible})}),2e3)}},{key:"getLink",value:function(e,t){return l.a.createElement(we.a.Link,{onClick:function(){return ke.animateScroll.scrollTo(document.getElementById(e).offsetTop-50)}},l.a.createElement(y.a,{icon:t}),e)}},{key:"render",value:function(){return l.a.createElement(ve.a,{bg:"dark",expand:"lg",variant:"dark",fixed:"top",className:this.state.isVisible?"Visible":""},l.a.createElement(ve.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(ve.a.Collapse,{id:"mainNavbar"},l.a.createElement(we.a,{className:"mr-auto"},this.getLink("Home",b.g),this.getLink("About",b.k),this.getLink("Experience",b.j),this.getLink("Projects",b.e),this.getLink("Contact",b.h),l.a.createElement(we.a.Link,{href:"/resume"},l.a.createElement(y.a,{icon:b.f}),"Resume"))),l.a.createElement(ve.a.Brand,{onClick:function(){return ke.animateScroll.scrollToTop()}},c.name))}}]),n}(s.Component)),Ce=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(je,null),l.a.createElement(Ee,null),l.a.createElement(g,null),l.a.createElement(x,null),l.a.createElement(re,null),l.a.createElement(he,null),l.a.createElement(ye,null),l.a.createElement(fe,null))}}]),n}(s.Component);t.default=Ce},42:function(e){e.exports=JSON.parse('{"name":"Bharath Kumar","proffesions":["Mechanical Engineer","Python Programmer"],"about_me":"Hi! I\'m Bharath kumar, a Mechanical Engineer from India, and I\'ve been interested in how do things work. I am currently working in <a href=\\"https://poorvikamobiles.com/\\"> Poorvika Mobiles Pvt Ltd</a><br/><br/>I love finding out how things work and visualizing them in a creative way using computer technology.<br/><br/>Here you can see some of the projects I\'ve had the opportunity of contributing to, and some of the personal-fun-things I\'ve been working on. I have a strong perseverance for learning new things and taking on challenges, and I always like to put some extra time in polishing my creations, to make sure the creative vision is achieved in the best possible way. I\'m especially focused on python programming and also a mechanical product works. I\'ve always been extremely curious in Design Software do math, and sometimes this curiosity has led me to programming I cannot legally publish anywhere...<br/><br/>Sometimes I also make websites, like this one. I found this when I looking for new project ideas. If you have any questions please feel free to contact me &#128521;","email":"jbharathkumar770@gmail.com","workingExperience":[{"name":"Poorvika Mobiles Pvt Ltd","url":"http://www.poorvikamobiles.com/","notes":["Executive Web support","Installing and configuring operating systems and applications","Installing and diagnosing local computer networks","Tech Products Reviews"]},{"name":"Ashok Leyland, Ennore","url":"https://www.ashokleyland.com/en/","notes":["InPlant Training","period: 7days"]},{"name":"NLC India Limited","url":"https://www.nlcindia.com/new_website/index.htm","notes":["InPlant Training","period: 7days"]}],"education":[{"name":"Velammal Institute Of Technology","notes":["B.E. in Mechanical Engineering 2019"]},{"name":"Vel Tech Polytechnic College","notes":["Diploma in Mechanical Engineering 2016"]},{"name":"Vellayan Chettiyar Higher Secondary School","notes":["Secondary School 2013"]}],"humanLanguages":[{"name":"English","description":"Good speaking & writing skills"},{"name":"Tamil","description":"Native"}],"Hobbies":[{"name":"","notes":["Custom Rom Maintainer"," Reading Tech News","Motorcycle riding"]}],"Honors":[{"name":"","notes":["Won 1st Price in CAD Modeling conducted by Velammal Institute of Technology.","Best Manufacturing Award in Go-Kart event in Hyderabad by SKDC","Certified from Google by completing fundamentals digital marketing.","Certified as Six Sigma Green Belt Professional by Intelligence Quality."]}],"projects":[{"title":"Student-Portal","shortDescription":"Student-Portal written in Python","description":"data:,***This app is bundled with 8 different modules with their own use cases starting from a simple To Do list to a wikipedia integration. And everything is tied together with simple intuitive layout for an easy workflow.***","links":[{"title":"Source Code","link":"https://github.com/jbk005/Student-Portal"},{"title":"Download","link":"https://codeload.github.com/jbk005/Student-Portal/zip/main"}]},{"title":"Custom Rom Maintainer","shortDescription":"A free and open-source OS for various devices, based on the Android mobile platform.","description":"/Markdown/GrzybMic.md","links":[{"title":"Candy Rom","link":"https://candyroms.org/"}]},{"title":"Random Rassword Generator","shortDescription":"Random Rassword Generator using Python Modules.","description":"https://raw.githubusercontent.com/jbk005/Random_password_generator/main/README.md","links":[{"title":"Source Code","link":"https://github.com/jbk005/Random_password_generator"}]},{"title":"I Am Ironman Face","shortDescription":"Ironman face in Python insprie by instagram post. :)","description":"https://raw.githubusercontent.com/jbk005/I_am_ironman/main/README.md","links":[{"title":"Source Code","link":"https://github.com/jbk005/I_am_ironman"}]},{"title":"Simple Calculator","shortDescription":"My Second code in Python","description":"https://raw.githubusercontent.com/jbk005/Simple_calculator/main/README.md","links":[{"title":"Source Code","link":"https://github.com/jbk005/Simple_calculator"}]},{"title":"Hey, It\'s THIS PAGE!","shortDescription":"This project was created by me, to Know how a JS, CSS, React works.","description":"https://raw.githubusercontent.com/jbk005/jbk005.github.io/source/README.md","links":[{"title":"Source Code","link":"https://github.com/jbk005/jbk005.github.io"}]}],"startTime":"2020-11-24","clientsCount":0,"awardsCount":0,"socials":{"facebook":"https://www.facebook.com/jbharath.kumar.005","twitter":"https://twitter.com/JBK_005","instagram":"https://www.instagram.com/stranger_is_not_an_evil/","linkedin":"https://www.linkedin.com/in/jbk005/","twitch":null,"youtube":"https://www.youtube.com/c/JBK005"}}')}}]);
//# sourceMappingURL=4.85bd8cb8.chunk.js.map