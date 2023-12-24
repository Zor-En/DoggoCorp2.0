import * as PIXI from 'pixi.js';


const app = new PIXI.Application({ background: '#111', resizeTo: window });

document.body.appendChild(app.view);


// How fast sprite1 moves
const movementSpeed = 0.05;

// Strength of the impulse push
const impulsePower = 5;

// Test For Hit
function testForAABB(object1, object2)
{
    const bounds1 = object1.getBounds();
    const bounds2 = object2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}

// Calculates the results of a collision
function collisionResponse(object1, object2)
{
    if (!object1 || !object2)
    {
        return new PIXI.Point(0);
    }

    const vCollision = new PIXI.Point(
        object2.x - object1.x,
        object2.y - object1.y,
    );

    const distance = Math.sqrt(
        (object2.x - object1.x) * (object2.x - object1.x)
        + (object2.y - object1.y) * (object2.y - object1.y),
    );

    const vCollisionNorm = new PIXI.Point(
        vCollision.x / distance,
        vCollision.y / distance,
    );

    const vRelativeVelocity = new PIXI.Point(
        object1.acceleration.x - object2.acceleration.x,
        object1.acceleration.y - object2.acceleration.y,
    );

    const speed = vRelativeVelocity.x * vCollisionNorm.x
        + vRelativeVelocity.y * vCollisionNorm.y;

    const impulse = impulsePower * speed / (object1.mass + object2.mass);

    return new PIXI.Point(
        impulse * vCollisionNorm.x,
        impulse * vCollisionNorm.y,
    );
}

// Calculate the distance between two given points
function distanceBetweenTwoPoints(p1, p2)
{
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;

    return Math.hypot(a, b);
}

// The sprite we will knock about
const sprite2 = new PIXI.Sprite(PIXI.Texture.WHITE);

sprite2.position.set((app.screen.width - 100) / 2, (app.screen.height - 100) / 2);
sprite2.width = 100;
sprite2.height = 100;
sprite2.tint = 0x00FF00;
sprite2.acceleration = new PIXI.Point(0);
sprite2.mass = 3;

// The sprite you move around
const sprite1 = new PIXI.Sprite(PIXI.Texture.WHITE);

sprite1.position.set(0, 0);
sprite1.width = 100;
sprite1.height = 100;
sprite1.tint = 0xFF0000;
sprite1.acceleration = new PIXI.Point(0);
sprite1.mass = 1;

const mouseCoords = { x: 0, y: 0 };

app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.on('mousemove', (event) =>
{
    mouseCoords.x = event.global.x;
    mouseCoords.y = event.global.y;
});

// Listen for animate update
app.ticker.add((delta) =>
{
    // Applied deacceleration for both sprites
    sprite1.acceleration.set(sprite1.acceleration.x * 0.99, sprite1.acceleration.y * 0.99);
    sprite2.acceleration.set(sprite2.acceleration.x * 0.99, sprite2.acceleration.y * 0.99);

    // Check whether sprite2 ever moves off the screen if so, reverse acceleration in that direction
    if (sprite2.x < 0 || sprite2.x > (app.screen.width - 100))
    {
        sprite2.acceleration.x = -sprite2.acceleration.x;
    }

    if (sprite2.y < 0 || sprite2.y > (app.screen.height - 100))
    {
        sprite2.acceleration.y = -sprite2.acceleration.y;
    }

    // If sprite 2 pops out, it pops back into the middle
    if ((sprite2.x < -30 || sprite2.x > (app.screen.width + 30))
        || sprite2.y < -30 || sprite2.y > (app.screen.height + 30))
    {
        sprite2.position.set((app.screen.width - 100) / 2, (app.screen.height - 100) / 2);
    }

    // If the mouse is off screen, then don't update any further
    if (app.screen.width > mouseCoords.x || mouseCoords.x > 0
        || app.screen.height > mouseCoords.y || mouseCoords.y > 0)
    {
        // Get sprite 1's center point
        const sprite1CenterPosition = new PIXI.Point(
            sprite1.x + (sprite1.width * 0.5),
            sprite1.y + (sprite1.height * 0.5),
        );

        // Calculate the direction vector between the mouse pointer to sprite 1
        const toMouseDirection = new PIXI.Point(
            mouseCoords.x - sprite1CenterPosition.x,
            mouseCoords.y - sprite1CenterPosition.y,
        );

        // Use the above to figure out the angle that direction has
        const angleToMouse = Math.atan2(
            toMouseDirection.y,
            toMouseDirection.x,
        );

        // Figure out the speed the sprite should be travelling 
        const distMousesprite1 = distanceBetweenTwoPoints(
            mouseCoords,
            sprite1CenterPosition,
        );
        const redSpeed = distMousesprite1 * movementSpeed;

        // Calculate the acceleration of sprite1
        sprite1.acceleration.set(
            Math.cos(angleToMouse) * redSpeed,
            Math.sin(angleToMouse) * redSpeed,
        );
    }

    // If the two sprites are colliding
    if (testForAABB(sprite2, sprite1))
    {
        // Calculate the changes in acceleration that should be made between squares
        const collisionPush = collisionResponse(sprite2, sprite1);

        // Set the changes in acceleration for both sprites
        sprite1.acceleration.set(
            (collisionPush.x * sprite2.mass),
            (collisionPush.y * sprite2.mass),
        );
        sprite2.acceleration.set(
            -(collisionPush.x * sprite1.mass),
            -(collisionPush.y * sprite1.mass),
        );
    }

    sprite2.x += sprite2.acceleration.x * delta;
    sprite2.y += sprite2.acceleration.y * delta;

    sprite1.x += sprite1.acceleration.x * delta;
    sprite1.y += sprite1.acceleration.y * delta;
});

// Add to stage
app.stage.addChild(sprite1, sprite2);



export { app, sprite1, sprite2 };