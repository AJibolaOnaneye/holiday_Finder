import React from 'react'

const PrevButton = (props) => {
    return (
        <div>
            <a className="carousel-control-prev" href="#carousel_1" role="button" data-slide="prev">
    <span className=" carousel_arrow" aria-hidden="true">
    <i class="fas fa-angle-left rightangle carousel-control-prev-icon" />
    </span>
    <span className="sr-only">{props.prev}</span>
  </a>

        </div>
    )
}

export default PrevButton
