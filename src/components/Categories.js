import React, { Component } from 'react'

export class Categories extends Component {
   constructor(props) {
      super(props)
      this.state = {
         categories: [
            {
               key: 'all',
               name: 'All'
            },
            {
               key: 'chair',
               name: 'Chairs'
            },
            {
               key: 'table',
               name: 'Tables'
            },
            {
               key: 'lamp',
               name: 'Lamps'
            },
            {
               key: 'armchair',
               name: 'Armchairs'
            },
            {
               key: 'sofa',
               name: 'Sofas'
            },
         ]
      }
   }
  render() {
    return (
       <div className='categories'>{this.state.categories.map(el => (
         <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
      ))}</div>
    )
  }
}

export default Categories