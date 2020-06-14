import React from 'react';
//import Posts from './Posts';
import './style.css';

//import { Link } from 'react-router-dom';

class ViewPosts extends React.Component {
	render() {
		return (
			<div className="container mb-5">
				<h2 className="mt-5">Posts</h2>
				<p className="lead"> View all type of post like share experience, asking suggestions</p>
				<div className="text-right">
							<button className="btn btn-raised btn-success btn-sm postButton">Create Post</button>					
							</div>
				<table className="table table-striped table-bordered">
					
					<tr>
						<th>S.No</th>
						<th>Heading</th>
						<th>Date Posted</th>
						<th>Posted By</th>
						<th>Disease</th>
						<th>Likes</th>
						<th>Description</th>
						<th>View Article</th>
					</tr>
					<tr>
						<td>1</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>2</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>3</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>4</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>5</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>6</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>7</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>8</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>9</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
					<tr>
						<td>10</td>
						<td>Heading 1</td>
						<td>14/06/2020</td>
						<td>Raghav Lakhotia</td>
						<td>Covid 19</td>
						<td>15</td>
						<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
						<td><button className="btn btn-raised btn-link btn-sm">Read more</button></td>					
					</tr>
				</table>
				
			</div>
		);
	}
}

export default ViewPosts;
