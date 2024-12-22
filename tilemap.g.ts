// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Map":
            case "Map1":return tiles.createTilemap(hex`100010000a0a0a0a0c0a0a0a0a0a0a0a0a0a0a0a0a01060606060606060606060606020a0a04090909090909090909090909080a0a04090909090909090909090909080a0a04090909090707070709090909080c0a04090909080b0b0b0b04090909080a0a04090909030b0b0b0b04090909080a0a040909080b0b0c0b0b04090909080a0a040909080b0b0b0b0409090909080c0a04090909060606060909090909080a0c04090909090909090909090909080a0a04090909090909090909090909080a0a04090909090909090909090909080a0a04090909090909090909090909080a0a05070707070707070707070707030a0a0a0a0a0c0a0a0a0a0a0c0a0a0a0a0a`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
