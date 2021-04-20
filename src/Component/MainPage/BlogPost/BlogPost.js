import React from 'react';
import Heading from '../Heading/Heading';
import './blogpost.css'
import img1 from './../../../img/slide1.jpg'
import img2 from './../../../img/slide2.jpg'
import img3 from './../../../img/slide3.jpg'



const BlogPost = () => {
    return (
		<div className="blog-bg">
			<section class="container  panel panel-default">
	  <Heading title={'Blog Post'}></Heading>

<div class="panel-body">
  
<div class="row">
	<div class="col-sm-4">
<article class="post-grid">
	<div class="img-holder">
	<img src={img1}/>
	
	<div class="hover-info">
	<span class="label label-primary"> <i class="fa fa-calendar"></i> <time>2021-12-13</time> </span>
	<span class="label label-info"> <i class="fa fa-eye"></i> 0  </span>
	<a href="" class="pull-right">Saterday </a>
	</div>
	</div>
	<div class="content-item">
	<h4 class="title"><a href="#">Why Your Computer Hates You </a></h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .</p>
	</div>
</article>
	</div>
	<div class="col-sm-4">
<article class="post-grid">
	<div class="img-holder">
<img src={img2}/>
	
	<div class="hover-info">
	<span class="label label-primary"> <i class="fa fa-calendar"></i> <time>2021-12-13</time> </span>
	<span class="label label-info"> <i class="fa fa-eye"></i> 0  </span>
	<a href="" class="pull-right">Saterday </a>
	</div>
	</div>
	<div class="content-item">
	<h4 class="title"><a href="#">Why Your Computer Hates You </a></h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam justo, pretium eu tempus ut</p>
	</div>
</article>
	</div>
	<div class="col-sm-4">
<article class="post-grid">
	<div class="img-holder">
	<img src={img3}/>
	
	<div class="hover-info">
	<span class="label label-primary"> <i class="fa fa-calendar"></i> <time>2021-12-13</time> </span>
	<span class="label label-info"> <i class="fa fa-eye"></i> 0  </span>
	<a href="" class="pull-right">Saterday </a>
	</div>
	</div>
	<div class="content-item">
	<h4 class="title"><a href="#">Why Your Computer Hates You </a></h4>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, .</p>
	</div>
</article>
	</div>
</div>
  
</div>
</section>
		</div>	
    );
};

export default BlogPost;